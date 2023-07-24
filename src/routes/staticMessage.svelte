<script lang="ts">
    import { onMount } from 'svelte';
    import {
        getNode,
        type MessageNodeId,
        type chatMessage,
        createNode,
        deleteNode,
        type content_message,
        type function_call,
        type function_result
    } from './store';

    export let id: MessageNodeId;

    let old_id = id;

    let node = getNode(id)!;
    if ($node.message.role == 'user') {
        throw new Error('userMessage can only be used for user messages');
    }
    let message: chatMessage = $node.message;
    let fcall: function_call | null = null;
    let fres: function_result | null = null;

    if (message.function_call) {
        fcall = message as function_call;
    }

    if (message.name) {
        fres = message as function_result;
    }

    $: {
        node = getNode(id)!;
        message = $node.message;
        if (message.function_call) {
            fcall = message as function_call;
        } else {
            fcall = null;
        }
        if (message.name) {
            fres = message as function_result;
        } else {
            fres = null;
        }
    }

    function tohtml(text: string | null) {
        if (text == null) {
            return '';
        }
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
                // `<pre class="codeblock"><div> ${lang} <button onclick='navigator.clipboard.writeText(\`${copycode}\`)'>copy</button> </div>` +
                `<pre class="codeblock"><div> ${lang} </div>` + code + '</pre>';

            res = res.substring(0, start_index) + codeblock + res.substring(last_index + 3);
        }
        return res;
    }

    let show_function_call = false;

    function format_function_arguments(call: string) {
        try {
            let item = JSON.parse(call);
            if (item.argument) {
                return item.argument;
            } else {
                return call;
            }
        } catch {
            return call;
        }
    }
</script>

<div class="bubble">
    <button>&nbsp;</button>

    {#if $node.message.role == 'assistant'}
        {#if fcall}
            <div class="assistant">
                <div class="msg">
                    <button
                        class="function_title"
                        on:click={() => {
                            show_function_call = !show_function_call;
                        }}
                        >{show_function_call ? 'v' : '>'}
                        {fcall.function_call.name}
                    </button>
                    {#if show_function_call}
                        <div style="margin:1em">
                            {format_function_arguments(fcall.function_call.arguments)}
                        </div>
                    {/if}
                </div>
            </div>
        {:else}
            <div class="assistant">
                <div class="msg">
                    {@html tohtml(message.content)}
                </div>
            </div>
        {/if}
    {:else if message.role == 'function'}
        <div class="function">
            <div class="msg">
                {fres?.content}
            </div>
        </div>
    {:else}
        <div>
            <div class="msg">
                <h2>error243</h2>
                {message.content}
            </div>
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
    .function_title {
        background-color: #222c39;
        padding: 0.5em;
        border-radius: 0.3em;
    }

    .bubble {
        display: flex;
        left: 0;
        justify-content: center;
    }
    .bubble:hover > button {
        display: block;
        color: rgb(255, 35, 35);
    }
    .bubble > button {
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
    .assistant,
    .function {
        display: flex;
        right: 0;
        justify-content: center;
        background-color: #28b36b;
        border-radius: 10px;
    }

    .function {
        background-color: #222c39;
    }

    .assistant {
        background-color: #2d2d2d;
    }
</style>
