<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { chatCompletion } from './backendrequest';
    import {
        context_message_number,
        createNode,
        deleteNode,
        getNode,
        messagecount,
        type MessageNodeId,
        type MessageNode
    } from './store';
    import Message from './staticMessage.svelte';
    import { get, writable, type Writable } from 'svelte/store';

    import DynamicMessage from './dynamicMessage.svelte';
    import StaticMessage from './staticMessage.svelte';

    export var nodeId: MessageNodeId;

    let node = getNode(nodeId);

    let old_child_count = $node ? $node.children.length : 0;

    var oldid = nodeId;
    $: if (browser && nodeId != oldid) {
        node = getNode(nodeId);
        oldid = nodeId;

        old_child_count = $node.children.length;
        openchild = 0;
    }

    let openchild = 0;

    function get_history(last?: Writable<MessageNode>) {
        if (last == undefined) last = node;
        let hist = [get(last).message];
        let prev = get(last).parent;
        while (prev != null && hist.length < $context_message_number) {
            let prevnode = getNode(prev);
            hist = [get(prevnode).message, ...hist];
            prev = get(prevnode).parent;
        }

        console.log(hist);
        return hist;
    }

    async function send(senderID?: number) {
        if (senderID == undefined) {
            senderID = nodeId;
        }
        let hist = get_history(getNode(senderID));
        console.log({ hist });

        let childid = createNode({ role: 'assistant', content: '' }, senderID);

        let child = getNode(childid);

        let message = writable(get(child).message);

        message.subscribe((val) => {
            child.update((c) => ({ ...c, message: val }));
        });

        await chatCompletion({ messages: hist }, message);

        if (get(message).function_call) {
            let fcall = get(message).function_call;
            if (fcall?.name == 'eval') {
                let res: any;
                let res_string = '';

                childid = createNode(
                    { role: 'function', name: 'eval', content: res_string },
                    childid
                );
                let function_node = getNode(childid);

                try {
                    let conslog = function (...a: any) {
                        res_string += a + '\n';
                        console.log(res_string);
                        console.log(child);
                        function_node.update((n) => ({
                            ...n,
                            message: { ...n.message, content: res_string }
                        }));
                    };

                    let call = JSON.parse(fcall.arguments);

                    let code: string = call.argument.replaceAll('console.log', 'conslog');

                    res = eval(code);

                    if (code.includes('conslog')) {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                    }
                    if (res instanceof Promise) {
                        console.log('awaiting promise');
                        res = await res;
                        res_string += JSON.stringify(res);
                    }

                    console.log(res);

                    res_string += JSON.stringify(res) ?? '';
                    function_node.update((n) => ({
                        ...n,
                        message: { ...n.message, content: res_string }
                    }));
                } catch (e) {
                    console.log(e);
                    console.log(fcall.arguments);
                    let estring = String(e);
                    console.log(estring);
                    res_string += estring;
                    function_node.update((n) => ({
                        ...n,
                        message: { ...n.message, content: res_string }
                    }));
                }
            }
            send(childid);
        } else {
            createNode({ role: 'user', content: '' }, childid);
        }
    }

    onMount(() => {
        node.subscribe((val) => {
            if (val.children.length > old_child_count) {
                openchild = 0;
                console.log('child added', old_child_count);
                old_child_count = val.children.length;
            } else if (val.children.length < old_child_count) {
                console.log('child removed');
                openchild = Math.max(0, openchild - 1);
                old_child_count = val.children.length;
            }
        });
    });
</script>

{#if $node}
    {#if $node.message.role == 'user'}
        <DynamicMessage id={nodeId} sendMessage={send} />
    {:else if $node.message.role != 'system' && $node.message.role != 'function'}
        <StaticMessage id={nodeId} />
    {/if}

    {#if $node.children.length > 0}
        {#if $node.message.role != 'system' && $node.message.role != 'function'}
            <div class="navbar">
                <button
                    class={openchild > 0 ? 'active' : 'hidden'}
                    on:click={() => {
                        openchild = Math.max(0, openchild - 1);
                    }}>&lt;</button
                >

                <button
                    class={$node.children.length > openchild + 1 ? 'active' : 'hidden'}
                    on:click={() => {
                        openchild = Math.min($node.children.length - 1, openchild + 1);
                    }}>&gt;</button
                >
            </div>
        {/if}

        <div>
            <svelte:self nodeId={$node.children[openchild]} />
        </div>
    {/if}
{/if}

<style>
    .navbar {
        display: flex;
        justify-content: center;
        font-family: monospace;
    }

    .navbar > button {
        /* all: unset; */
        all: unset;
        color: rgba(255, 255, 255, 0.28);
        margin: 0.5em;
        border-radius: 1em;
    }
    .navbar > button.active {
        display: block;
        color: white;
    }
</style>
