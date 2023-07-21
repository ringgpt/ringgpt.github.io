export type chatMessage = {
    role: "user" | "assistant" | "system";
    content: string;
}

export type MessageNode = {
    message : chatMessage;
    children: MessageNode[];
    parent: MessageNode | null;
}


export type Conversation = {
    title: string;
    root: MessageNode;
}

