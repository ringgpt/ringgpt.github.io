<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { chatCompletion } from './backendrequest';
    import { createNode, deleteNode, getNode, type MessageNodeId } from './store';
    import Message from './message.svelte';
    import { get } from 'svelte/store';
    import { updated } from '$app/stores';

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

    function get_history() {
        console.log('get history');
        let hist = [$node.message];
        let prev = $node.parent;
        while (prev != null) {
            let prevnode = getNode(prev);
            hist = [get(prevnode).message, ...hist];
            prev = get(prevnode).parent;
        }

        console.log(hist);
        return hist;
    }

    async function send() {
        console.log('send');

        let hist = get_history();
        let childid = createNode({ role: 'assistant', content: '' }, nodeId);
        createNode({ role: 'user', content: '' }, childid);

        let child = getNode(childid);
        let res = await chatCompletion({ messages: hist }, (newcontent) =>
            child.update((c) => ({ ...c, message: { ...c.message, content: newcontent } }))
        );

        child.update((c) => ({ ...c, message: { ...c.message, content: res } }));
    }
    onMount(() => {
        node.subscribe((val) => {
            if (val.children.length > old_child_count) {
                openchild = 0;
                console.log('child added');
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
    <Message id={nodeId} sendMessage={send} />

    {#if $node.children.length > 0}
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
