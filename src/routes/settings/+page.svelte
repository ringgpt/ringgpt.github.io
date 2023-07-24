<script lang="ts">
    import { context_message_number, primer } from '../store';
</script>

<h2>settings</h2>

<br />

<label for="contextsetting">context size (in chat messages)</label>
<input type="number" name="contextsetting" bind:value={$context_message_number} />
<br />
<label for="primerinput">primer:</label>
<br />
<textarea
    name="primerinput"
    id="primerinput"
    cols="30"
    rows="10"
    bind:value={$primer.message.content}
/>

<br />
<p />

<a href="/">home</a>

<style>
    input,
    textarea {
        background-color: rgba(240, 248, 255, 0.492);
    }
</style>
