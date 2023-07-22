import { get } from "svelte/store";
import { useserver, type chatMessage, openaikey } from "./store";
import { chat_stream_request } from "./apirequest";


export type OpenAIStreamPayload = {
    messages: chatMessage[];
    maxTokens?: number;
    temperature?: number;
    topP?: number;
    n?: number;
    logitBias?: { [keys: string]: number };
};

export async function completionRequest(
    params: {
        message: string;
        maxTokens?: number;
        temperature?: number;
        topP?: number;
        n?: number;
        logitBias?: { [keys: string]: number };
    },
    callback?: (answer: string) => void
) {
    let resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params.message,),
    });

    return streamResponse(resp);
}

async function streamResponse(resp: Response) {


    if (resp.body == null) {
        console.error("failed to get response stream");

        return "";
    }

    let stream = resp.body.getReader();
    let decoder = new TextDecoder();
    let answer = "";

    let done = false;
    while (!done) {
        const { value, done: doneReading } = await stream.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        let items = chunkValue.split("\n");

        items.forEach((item) => {
            if (item == "data: [DONE]") {
                return answer;
            }
            if (!item.startsWith("data:")) {
                console.error("unexpected response", item);
                throw new Error("unexpected response");
            }
            let data = JSON.parse(item.slice(6));
            answer += data.choices[0].text;
        });
    }

    return answer;
}

export async function chatCompletion(
    params: {
        messages: chatMessage[];
        maxTokens?: number;
        temperature?: number;
        topP?: number;
        n?: number;
        logitBias?: { [keys: string]: number };
    },
    callback?: (answer: string) => void
) {

    let stream: ReadableStreamDefaultReader<Uint8Array>;
    if (get(useserver)){
        let resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(params),

        });

        if (resp.body == null) {
            console.error("failed to get response stream");

            return "";
        }

        if (resp.body == null) {
            console.error("failed to get response stream");

            return "";
        }
        stream = resp.body.getReader();
    }else{  

        stream = (await chat_stream_request( params as OpenAIStreamPayload, get(openaikey))).getReader();

    }

    let decoder = new TextDecoder();
    let answer = "";

    let done = false;
    while (!done) {
        const { value, done: doneReading } = await stream.read();

        done = doneReading;
        const chunkValue = decoder.decode(value);
        

        let items = chunkValue.split("\n").filter((item) => item.length > 0);

        items.forEach((item) => {
            if (item == "data: [DONE]") {
                return answer;
            }
            if (!item.startsWith("data:")) {
                console.error("unexpected response", item);
                throw new Error("unexpected response");
            }

            let data = JSON.parse(item.slice(6));

            if (data.choices[0].delta.content) {
                answer += data.choices[0].delta.content;
                callback?.(answer);
            }
        });
    }

    return answer;
}
