import type { OpenAIStreamPayload } from './backendrequest';

export async function chat_stream_request(params: OpenAIStreamPayload, oaikey: string) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + oaikey
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: params.messages,
            temperature: params.temperature ?? 0.7,
            functions: [
                {
                    name: 'eval',
                    description:
                        'Use this function to evaluate any javascript code. It can fetch information from the internet.',
                    parameters: {
                        type: 'object',
                        properties: {
                            argument: {
                                type: 'string',
                                description: 'javascript code to evaluate'
                            }
                        },
                        required: ['argument']
                    }
                },
                {
                    name: 'fetch_grocery_sortiment',
                    description:
                        'Use this function to fetch the grocery sortiment from the internet.',
                    parameters: {
                        type: 'object',
                        properties: {
                            store: {
                                type: 'string',
                                description: 'The store to fetch the sortiment from.'
                            },
                            name: {
                                type: 'string',
                                description: 'The name of the product to fetch.'
                            }
                        }
                    }
                }
            ],

            function_call: 'auto',
            stream: true
        })
    });
    return response.body!;
}
