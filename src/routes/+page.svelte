<script lang="ts">
	import type { PageData } from "./$types"

	import Markdown from "../markdown/Markdown.svelte"
	import Navigation from "../navigation/Navigation.svelte"

	export let data: PageData
</script>

<Navigation directories={data.directories} files={data.files} />
<article>
	<Markdown />
</article>

<style>
	article {
		max-width: 40rem;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
