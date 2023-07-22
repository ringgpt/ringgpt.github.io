<script lang="ts">
    import { onMount } from 'svelte';
    import { getNode, type MessageNodeId, type chatMessage, createNode, deleteNode } from './store';
    import { browser } from '$app/environment';

    export let id: MessageNodeId;
    let old_id = id;
    export let sendMessage: () => void;

    let node = getNode(id)!;

    let me: any;

    $: {
        node = getNode(id)!;
        if (me && ($node.message.role != 'user' || old_id != id)) {
            me.innerHTML = tohtml($node.message.content);
            old_id = id;
        }
    }

    onMount(() => {
        me.innerHTML = tohtml($node.message.content);
    });

    function tohtml(text: string) {
        let res = text.replaceAll('<', '&lt;').replace(/\n/g, '<br>');

        var last_index: number = 0;

        while (true) {
            let start_index = res.indexOf('```', last_index);

            if (start_index == -1) {
                break;
            }

            let inner_start_index = res.indexOf('<br>', start_index + 1);
            let lang = res.substring(start_index + 3, inner_start_index);

            last_index = res.indexOf('```', inner_start_index);

            if (last_index == -1) {
                break;
            }

            let code = res.substring(inner_start_index + 4, last_index);
            let copycode = code.replaceAll('"', '\\"').replaceAll('<br>', '\n');
            let codeblock =
                `<pre class="codeblock"><div> ${lang} <button onclick='navigator.clipboard.writeText(\`${copycode}\`)'>copy</button> </div>` +
                code +
                '</pre>';

            res = res.substring(0, start_index) + codeblock + res.substring(last_index + 3);

            // break
        }
        return res;
    }

    function totext(html: string) {
        return html.replace(/<br>/g, '\n');
    }

    let shiftpressed = false;

    function keypress(e: KeyboardEvent) {
        if (e.key == 'Enter' && !shiftpressed) {
            e.preventDefault();
            sendMessage();
        } else {
        }
    }

    function keydown(e: KeyboardEvent) {
        if (e.key == 'Shift') {
            shiftpressed = true;
        }
    }
    function keyup(e: KeyboardEvent) {
        if (e.key == 'Shift') {
            shiftpressed = false;
        }
    }

    function input(e: Event) {
        let newcontent = totext(me.innerHTML);
        let oldcontent = $node.message.content;
        if ($node.children.length > 0) {
            createNode({ role: 'user', content: newcontent }, $node.parent);
            me.innerHTML = tohtml(oldcontent);
            console.log('create new node', newcontent);
        } else {
            node.update((n) => {
                n.message.content = newcontent;
                return n;
                return n;
            });
        }
    }

    export function cleanMarkup(txt: string) {
        let textarea = document.createElement('textarea');

        textarea.innerHTML = txt;
        textarea.remove();
        return textarea.value;
    }

    function onpaste(e: ClipboardEvent) {
        e.preventDefault();
        console.log('paste');

        let text = e.clipboardData?.getData('text/plain');
        if (text) {
            document.execCommand('insertText', false, text);
        }
    }
</script>

<div class="bubble">
    <button>&nbsp;</button>
    {#if $node.message.role == 'user'}
        <div class="user">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                bind:this={me}
                contenteditable
                class="msg"
                on:keypress={keypress}
                on:keyup={keyup}
                on:keydown={keydown}
                on:input={input}
                on:paste={onpaste}
            />
            <button
                class="active"
                on:click={() => {
                    deleteNode(id);
                }}>x</button
            >
        </div>
    {:else}
        <div class="assistant">
            <div bind:this={me} class="msg" />
        </div>
    {/if}
    <button
        class="active"
        on:click={() => {
            deleteNode(id);
        }}>x</button
    >
</div>

<style>
    .bubble {
        display: flex;
        left: 0;
        justify-content: center;
    }
    .bubble:hover > button {
        display: block;
        color: rgb(255, 35, 35);
    }
    button {
        all: unset;
        display: none;
        margin: 0.5em;
    }

    .msg {
        color: white;
        justify-content: flex-start;
        max-width: 40em;
        white-space: pre-wrap; /* Wrap long lines of text */
        font-family: monospace;
        padding: 10px;
    }

    .user,
    .assistant {
        display: flex;
        right: 0;
        justify-content: center;
        background-color: #28b36b;
        border-radius: 10px;
    }
    .assistant {
        background-color: #2d2d2d;
    }
</style>
