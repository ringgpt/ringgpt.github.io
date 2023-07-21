
<script lang="ts">
    import { onMount, tick } from "svelte";
    import { chatCompletion } from "./backendrequest";
    import type { Conversation, chatMessage } from "./chat";
    import Message from "./message.svelte";
    import ChatNode from "./chatNode.svelte";




    let answer:string = "";

    let conv:Conversation = {
        title: "baseconv",
        root: {
            message: {
                content: "hello",
                role: "assistant"
            },
            children: [
                {
                    message: {
                        content: "hello",
                        role: "user"
                    },
                    children: [],
                    parent:null,
                },
                {
                    message: {
                        content: "I cant talk right now.",
                        role: "user"
                    },
                    children: [],
                    parent:null,
                }
            ],
            parent:null,
        }
    }


    let sending = false;


    // let lastMessage:chatMessage = {role:"user", content:""}

    let lastBubble:any;

    onMount(()=>{
        // lastBubble.$$.ctx[1].focus();
    })

    function reset(){
    }


</script>


<div class=navbar>

    <button on:click={reset}>reset</button>
    <button>hist</button>

</div>

<main>
    <ChatNode node = {conv.root} />

</main>

<style>

    .navbar{
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

    .navbar>button{
        all: unset;
        margin:1em .5em;
        background-color: gray;
        padding:.7em;
        border-radius: 1em;
        padding-bottom: 1.7em;
		color: rgb(24, 24, 24);
        cursor: pointer;
        
        font-weight: bold;
    }

    main{
        padding: 5em 2em ;
        padding-bottom: 70vh;

    }

    .input{
        position: fixed;
        bottom: 0;
        padding:1em;
    }

</style>
