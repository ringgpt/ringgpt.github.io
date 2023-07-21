import { env } from "$env/dynamic/private";

const apiKey = env.OPENAI_API_KEY;

console.log(apiKey);

export interface ChatGPTMessage {
    role: "user" | "assistant" | "system";
    content: string;
}

export interface OpenAIStreamPayload {
    model: string;
    messages: ChatGPTMessage[];
    temperature: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    logit_bias: { [key: string]: number } | null;
    max_tokens: number;
    stream: boolean;
    stop?: string[];
    user?: string;
    n: number;
    function_call?: { name: string } | "auto" | "none";
}

export async function POST({ request }: import("./$types.js").RequestEvent) {

    let body = await request.json()
    console.log(body);
    
    


    let messages = body .messages;
    

    let payload = {
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
        stream: true,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify(payload),
    });

    console.log(response.body);

    return new Response(response.body);
}
