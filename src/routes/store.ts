import { browser } from '$app/environment';
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

if (browser) {
    if (get(openaikey) == '') {
        let usrinput = prompt('please enter your openai key');
        if (usrinput != null) {
            openaikey.set(usrinput);
        }
    }
}

export const messagecount = createWritable('messagecount', 0);

export type chatMessage = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

export type MessageNode = {
    message: chatMessage;
    children: MessageNodeId[];
    parent: MessageNodeId | null;
};

export type MessageNodeId = number;

let database: { [keys: MessageNodeId]: Writable<MessageNode> } = {};

if (browser) {
    if (!localStorage.getItem('message_0')) {
        createNode({ role: 'assistant', content: 'how can I help you?' }, null);
        createNode({ role: 'user', content: 'explain quantum computing for a five year old' }, 0);
        createNode({ role: 'user', content: 'say "I love you" in binary' }, 0);
        createNode({ role: 'user', content: 'show me a spline in python' }, 0);
        createNode({ role: 'user', content: '...' }, 0);
    }
}

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

export function createNode(message: chatMessage, parent: MessageNodeId | null) {
    let id = 0;
    messagecount.update((value) => {
        id = value;
        return value + 1;
    });
    console.log('creating ', id);

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
