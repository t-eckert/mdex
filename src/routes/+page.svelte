<script lang="ts">
	import type { PageData } from "./$types"

	import Markdown from "../markdown/Markdown.svelte"
	import Navigation from "../navigation/Navigation.svelte"

	export let data: PageData
	let { directories, files, markdown } = data
</script>

<Navigation {directories} {files} />
<section class="centered">
	<Markdown {markdown} />
</section>

<style>
	.centered {
		max-width: 40rem;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
