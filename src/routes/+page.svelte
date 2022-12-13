<script lang="ts">
    import { onMount } from "svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData

    onMount(() => console.log(data));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
