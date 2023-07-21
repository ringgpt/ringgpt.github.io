import { browser } from "$app/environment";
import { OPENAI_API_KEY } from "$env/static/private";
import { writable } from "svelte/store";
import type { Conversation } from "./chat";


function createWritable<T>(key: string, defaultValue: T) {
    var value: T;
    if (browser) {
        if (typeof defaultValue === 'string') {
        value = localStorage[key] ?? defaultValue;
        } else {
        let defaultJSON = JSON.stringify(defaultValue);
        let storedJSON = localStorage[key];
        if (storedJSON === 'undefined') {
            localStorage[key] = defaultJSON;
            storedJSON = defaultJSON;
        }

        value = JSON.parse(storedJSON ?? defaultJSON);
        }
        if (defaultValue instanceof Date) {
        value = new Date(value as string) as T;
        }
    } else {
        value = defaultValue;
    }

    const wr = writable(value);

    if (browser) {
        wr.subscribe((value) => {
        if (typeof value === 'string') {
            localStorage[key] = value;
        } else {
            localStorage[key] = JSON.stringify(value);
        }
        });
    }

    return wr;
}
  
export let openaiKey = createWritable<string>('openaiKey', OPENAI_API_KEY);

if (OPENAI_API_KEY && OPENAI_API_KEY !== "") {
    openaiKey.set(OPENAI_API_KEY);
    
}



export const conversations = writable<Conversation[]>([]);
export const messagecount = writable<number>(0);
