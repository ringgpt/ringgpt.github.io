import { browser } from '$app/environment';
import { tick } from 'svelte';
import { writable, type Writable, get } from 'svelte/store';

export function createWritable<T>(key: string, defaultValue: T) {
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
export const useserver = createWritable('useserver', false);
export const openaikey = createWritable('openaikey', '');


export const context_message_number = createWritable('context_message_number', 10);

export const messagecount = createWritable('messagecount', 0);

export type chatMessage = {
    role: 'user' | 'system' | 'assistant' | 'function';
    content: string | null;
    function_call?: { name: string; arguments: string };
    name?: string;
};

export type content_message = {
    role: 'user' | 'system' | 'assistant';
    content: string;
};

export type function_call = {
    role: 'assistant';
    content: string | null;
    function_call: { name: string; arguments: string };
};

export type function_result = {
    role: 'function';
    name: string;
    content: string;
};

export type Persona = {
    name: string;
    primer_id:MessageNodeId
    starter_id: MessageNodeId;
};

export function new_persona():Persona{

    console.log();
    

    let name="new_persona"
    let primer =  'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.'
    let start_message = 'Hello, how can I help you today?'

    let primer_id = createNode({role:"system",content:primer},null)
    let starter_id = createNode({role:"assistant",content:start_message},primer_id)
    createNode({role:"user",content:""},starter_id)

    return {
        name,primer_id,starter_id
    }
}

let database: { [keys: MessageNodeId]: Writable<MessageNode> } = {};


export var personas:Writable<Persona[]> = writable([])
if (browser) {
    if (get(openaikey) == '') {
        let usrinput = prompt('please enter your openai key');
        if (usrinput != null) {
            openaikey.set(usrinput);
        }
    }

    if (!localStorage.personas){
        let newone = new_persona()
        newone.name = "ringGPT"
        personas.set([newone])
        personas.subscribe(new_value => localStorage.personas = JSON.stringify(new_value))
    }else{
        personas.set(JSON.parse(localStorage.personas))
    }
    
}



export var active_persona: Writable<number> = createWritable('active_persona', 0);

export type MessageNode = {
    message: chatMessage;
    children: MessageNodeId[];
    parent: MessageNodeId | null;
};

export type MessageNodeId = number;


export function getNode(id: MessageNodeId) {
    if (!database[id]) {
        if (browser) {
            database[id] = createWritable<MessageNode>(`message_${id}`, {
                message: {
                    role: 'assistant',
                    content: 'how can I help you?'
                },
                children: [],
                parent: null
            });
        }
    }
    return database[id];
}

export function createNode(message: chatMessage, parent: MessageNodeId | null):MessageNodeId{
    if (message.role == 'function') {
        if (message.content == undefined) {
            message.content = '';
        }
    }

    let id = 0;
    messagecount.update((value) => {
        id = value;
        return value + 1;
    });

    let node = getNode(id);
    node?.set({
        message: message,
        children: [],
        parent: parent
    });

    if (parent != null) {
        let parentnode = getNode(parent);
        parentnode.update((p) => ({ ...p, children: [id, ...p.children] }));
    }

    return id;
}

export function deleteNode(id: MessageNodeId) {
    if (id == 0) {
        return;
    }

    let node = get(getNode(id));

    if (node.parent == 0 && get(getNode(0)).children.length == 1) {
        createNode({ role: 'user', content: '' }, 0);
    }

    console.log('deleting ', id);
    if (node.parent != null) {
        let parentnode = getNode(node.parent);
        parentnode.update((p) => ({ ...p, children: p.children.filter((x) => x != id) }));
        console.log('parent ', get(parentnode));
    }

    node.children.forEach((child) => {
        deleteNode(child);
    });

    localStorage.removeItem(`message_${id}`);
    delete database[id];
}
