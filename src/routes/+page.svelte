<script lang="ts">
    import { onMount, tick } from 'svelte';

    import { getNode, type chatMessage, createNode, active_persona, personas } from './store';
    import Message from './staticMessage.svelte';
    import ChatNode from './chatNode.svelte';
    import { get } from 'svelte/store';

    function reset() {


        // console.log(`setting character ${$active_persona.name} id.${$active_persona.starter_id}`);
        
        createNode({ role: 'user', content: '' }, $personas[$active_persona].starter_id);
    }

    var root = 0

    onMount(() => {
        if (window.origin.includes('localhost')) {
            document.title = 'LocalRing';
            console.log('local');
        }

        // root = get(getNode($active_persona.starter_id)).parent!

    });

</script>

<main>

    {#if $active_persona!=undefined && $personas[$active_persona]}
        <a class="headerlink" href="/settings" >{ $personas[$active_persona].name}</a>

        <p></p>
        <ChatNode nodeId={ $personas [$active_persona].starter_id} />
    {/if}

    <div class="footer">
        <button class="homebtn" on:click={reset} />
    </div>
</main>

<style>
    .headerlink {
        /* position: fixed; */
        color: rgba(127, 255, 212, 0.345);

        background-color: rgb(24,24,24);
        text-decoration: none;
        padding: .5em;
        box-shadow: 0 0 0.5em black;
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
        padding: 2em 2em;
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
        background-image: url('/favicon3.svg');
        background-repeat: no-repeat;
        width: 1em;
        height: 1em;
        background-size: contain;
        background-color: rgb(24, 24, 24);
        box-shadow: 0 0 0.5em rgb(24, 24, 24);
    }
</style>
