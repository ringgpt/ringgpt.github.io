<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { chatCompletion } from './backendrequest';
    import { type chatMessage } from './store';
    import Message from './message.svelte';
    import ChatNode from './chatNode.svelte';

    function reset() {}
</script>

<main>
    <!-- <ChatNode nodeId = {db.conversations[0].root} /> -->
    <ChatNode nodeId={0} />
</main>

<style>
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
</style>
