import { env } from "$env/dynamic/private";

const apiKey = env.OPENAI_API_KEY;

console.log(apiKey);

export async function POST({ request }: import("./$types.js").RequestEvent) {
    const body = await request.json();

    let airesp = (await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
        },

        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: body.content,
            stream: true,
        }),
    })) as Response;

    console.log(airesp.body);

    return new Response(airesp.body);
}
