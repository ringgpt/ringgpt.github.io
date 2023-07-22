import type { OpenAIStreamPayload } from "./backendrequest";



export async function chat_stream_request(
    params:OpenAIStreamPayload,
    oaikey:string,
 ) {
     
     const response = await fetch("https://api.openai.com/v1/chat/completions", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             Authorization: "Bearer " + oaikey,
         },
         body: JSON.stringify({
             model: "gpt-3.5-turbo",
             messages:params.messages,
             temperature: params.temperature?? 0.7,
             stream: true,
         }),
     });
     return  response.body!;
 }
 