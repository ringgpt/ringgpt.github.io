<script lang="ts">
    import { get} from "svelte/store"
    import type {  Writable } from 'svelte/store';
    import {
        context_message_number,
        type Persona,
        personas,
        active_persona,
        getNode,
        new_persona,

        type MessageNode


    } from '../store';
    import { onMount } from 'svelte';
    import { browser } from "$app/environment";


    var charpickeropen = false;

    let starter:Writable<MessageNode> 
    let primer:Writable<MessageNode>

    active_persona.subscribe(newval=>{
        let persona = $personas[newval]
        console.log(persona);
        
        if(browser){

            starter = getNode(persona.starter_id)
            primer = getNode(persona.primer_id)
        }

    })
    

</script>

<h2>settings</h2>

<br />

<label for="contextsetting">context size (in chat messages)</label>
<input type="number" name="contextsetting" bind:value={$context_message_number} />
<br />

<h2>persona:</h2>
{#if $personas.length>0}
<button on:click={() => (charpickeropen = !charpickeropen)}>{$personas[$active_persona].name}</button>
<p />
{#if charpickeropen}
    <div>
        {#each $personas as _,idx}
            <button
                style="width:10em;border:1px solid black"
                on:click={() => {
                    $active_persona = idx;

                    charpickeropen = false;
                }}
            >
                {$personas[idx].name}
            </button>
            <br />
        {/each}
        <button 
        style="width:10em;border:1px solid black"
        on:click={() => {

            let np = new_persona()

            $personas.push(np)
            $active_persona = $personas.length -1
            charpickeropen = false;
            console.log($active_persona);
            console.log($personas);
            
            
        }}
        >
            + new persona
        </button>
    </div>
{/if}


<h3>

    <label for="nametag">name:</label>
    <input type="text" name="nametag" bind:value={$personas[$active_persona].name}>
    
</h3>
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<p style="color:red;cursor:pointer;text-decoration:underline" on:click={()=>{
    $personas = $personas.filter(p=>p.name != $personas[$active_persona].name)
    $active_persona = 0
}}>delete "{$personas[$active_persona].name}"</p>

<p />

<h3>primer:</h3>
<br />
<textarea id="primerinput" cols="40" rows="5" bind:value={$primer.message.content} />
<p />
<h3>starter message:</h3>
<br />
<textarea id="" cols="40" rows="5" bind:value={$starter.message.content} />

<br />
<p />

<a href="/">home</a>
{/if}

<style>
    input,
    textarea {
        background-color: rgba(240, 248, 255, 0.492);
    }


    button {
        background-color: rgba(240, 248, 255, 0.492);
        padding: 0.2em;
        color: black;
    }
</style>
