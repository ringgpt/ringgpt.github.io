
<script lang="ts">
    import { onMount } from "svelte";
    import type { chatMessage } from "./chat";
    import { browser } from "$app/environment";
    import { text } from "@sveltejs/kit";


    export let message:chatMessage;
    export let changeMessage = (content:string)=>{};
    export let sendMessage = ()=>{};

    export let listening = false;

    let me:any;

    $: if (browser && me ){
        if (!listening){
            console.log('not listening');
        }else{
            console.log("listening.");
            
            me.innerHTML = tohtml(message.content)    
        }
    }



    onMount(()=>{
        me.innerHTML = tohtml(message.content);
    })

    function tohtml(text:string){
        let res = text.replace(/\n/g, "<br>");


        var last_index:number = 0;


        while (true){
            let start_index = res.indexOf("```",last_index)
            last_index = res.indexOf("```",start_index+1)

            if (last_index == -1){
                break;
            }

            res = res.substring(0,start_index) + `<pre style='background:black;margin:10px;padding:10px;border-radius:10px'>` + res.substring(start_index+3,last_index) + "</pre>" + res.substring(last_index+3);
            console.log(res);
            
            // break

        }
        return res;

    }

    function totext(html:string){
        return html.replace(/<br>/g, "\n");
    }
    
    let shiftpressed = false;

    function keypress(e:KeyboardEvent){

        if(e.key == "Enter" && !shiftpressed){
            e.preventDefault();
            sendMessage();
        }else{

        }
    }


    function keydown(e:KeyboardEvent){
        if(e.key == "Shift"){
            shiftpressed = true;
        }
    }
    function keyup(e:KeyboardEvent){
        if(e.key == "Shift"){
            shiftpressed = false;
        }
    }

    function input(e:Event){
    
        changeMessage(totext(me.innerHTML));
    }
    
    export function cleanMarkup(txt:string){
        let textarea = document.createElement('textarea');

        textarea.innerHTML = txt;
        textarea.remove();
        return textarea.value;

    }

    function onpaste(e:ClipboardEvent){
        e.preventDefault();
        console.log('paste');
        
        let text = e.clipboardData?.getData('text/plain');
        if(text){
            document.execCommand('insertText', false, text);
        }
    }


</script>




    {#if message.role == "user"}
        <div class=user>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div bind:this={me} contenteditable class=msg  on:keypress={keypress} on:keyup={keyup} on:keydown={keydown} on:input={input} on:paste = {onpaste}></div>
        </div>
    {:else}

        <div class=assistant>
            <pre bind:this={me} class=msg ></pre>
        </div>

    {/if}



<style>

    .msg{
        color:white;


        border-radius: 10px;
        justify-content: flex-start;

        max-width: 40em;


        white-space: pre-wrap; /* Wrap long lines of text */
    /* Optional styles for better readability */
    font-family: monospace;
    padding: 10px;
    }
    .user{
        display: flex;
        right:0;
        justify-content:center;

    }
    .assistant{
        display: flex;
        left:0;
        justify-content: center;


    }

    .user>.msg{
        background-color: #28b36b;
    }
    .assistant>.msg{
        background-color: #2d2d2d;
    }
    



</style>


