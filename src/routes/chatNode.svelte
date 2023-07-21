<script lang="ts">
    import Message from "./message.svelte";
    import type { MessageNode, chatMessage } from "./chat";
    import { chatCompletion } from "./backendrequest";
    import { onMount, tick } from "svelte";

    export var node:MessageNode;


    let bubble:any;


    let openchild:MessageNode[] =[];
    onMount(()=>{
        node.children.forEach((child)=>{
            child.parent = node;
        })

        if (node.message.role == "user"){
            bubble.$$.ctx[1].focus();
        }else{
            if (node.children.length == 0){
                node.children = [{message:{content:"", role:"user"}, children:[], parent:node}]
            }
        }
        openchild = [node.children[0]];
    })

    let childindex = 0

    function gethist(){
        let hist : chatMessage[] = [node.message];
        let prev_node = node;

        while (prev_node.parent != null){
            prev_node = prev_node.parent;
            hist = [prev_node.message, ...hist];
        }

        return hist;
    }

    var sending = false;

    async function send(){

        let hist = gethist();
        sending = true;
        let new_child:MessageNode = {message:{content:"...", role:"assistant"}, children:[], parent:node}

        node.children = [...node.children, new_child]
        


        sending = false;

    }

    var listening = false

    function next(){
        changepage(1);
    }
    function previous(){
        changepage(-1);
    }

    async function changepage(delta:number){
        openchild = [];
        listening = true
        await tick()

        childindex += delta;
        openchild = [node.children[childindex]];

        await tick()
        listening = false
    }

    function changeMessage (content:string){
        node.message.content = content;
    }


</script>

<Message bind:this={bubble} message ={node.message} sendMessage={send} changeMessage={changeMessage} listening={listening}></Message>


<div class="chatnode">

{#if node.children.length > 0}

    <div class="subbar">

        {#if node.children.length > 1}

            {#if childindex > 0}
                <button on:click={previous}>&lt;</button>
            {/if}
            
            {#if childindex < node.children.length-1}
                <button on:click={next}>&gt;</button>
                
            {/if}

        
        {/if}

    </div>


    {#each openchild as node,i}

        <svelte:self bind:node={node} />

    {/each}

{/if}
    
</div>


<style>

    .chatnode{
        display:flex;
        flex-direction:column;
        align-items:center;

        margin:10px;
    }

    .subbar{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items: center;
        width:100%;
    }
</style>