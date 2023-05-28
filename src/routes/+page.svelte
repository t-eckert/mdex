<script>
	import Markdown from '../markdown/Markdown.svelte';
	import Navigation from '../navigation/Navigation.svelte';
</script>

<Navigation />
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
