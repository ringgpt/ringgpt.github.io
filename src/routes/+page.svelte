<script lang="ts">
    import { onMount, tick } from 'svelte';

    import { getNode, type chatMessage, createNode } from './store';
    import Message from './staticMessage.svelte';
    import ChatNode from './chatNode.svelte';

    function reset() {
        createNode({ role: 'user', content: '' }, 0);
    }

    onMount(() => {
        if (window.origin.includes('localhost')) {
            document.title = 'LocalRing';
            console.log('local');
        }
    });
</script>

<main>
    <a class="headerlink" href="/settings">settings</a>
    <ChatNode nodeId={0} />

    <div class="footer">
        <button class="homebtn" on:click={reset} />
    </div>
</main>

<style>
    .headerlink {
        position: fixed;
        color: rgba(127, 255, 212, 0.345);
        top: 2em;
    }
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3em;

        display: flex;
        justify-content: center;
        background-color: rgb(24, 24, 24);
        padding-bottom: 1.3em;
    }

    .navbar > button {
        all: unset;
        margin: 1em 0.5em;
        background-color: gray;
        padding: 0.7em;
        border-radius: 1em;
        padding-bottom: 1.7em;
        color: rgb(24, 24, 24);
        cursor: pointer;

        font-weight: bold;
    }

    main {
        padding: 5em 2em;
        padding-bottom: 70vh;
    }

    .input {
        position: fixed;
        bottom: 0;
        padding: 1em;
    }
    .footer {
        bottom: 0;
        display: flex;
        justify-content: center;
        position: fixed;
        left: 0;
        width: 100%;
    }
    .homebtn {
        all: unset;
        color: white;
        font-size: 2em;
        /* background-color: rgb(80, 80, 80); */
        padding: 0.5em 0.5em;
        border-radius: 1em;
        margin: 1em;
        background-image: url('/favicon2.svg');
        background-repeat: no-repeat;
        width: 1em;
        height: 1em;
        background-size: contain;
        background-color: rgb(24, 24, 24);
        box-shadow: 0 0 0.5em rgb(24, 24, 24);
    }
</style>
