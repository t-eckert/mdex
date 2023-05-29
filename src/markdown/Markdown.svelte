<script lang="ts">
	import { parseMarkdown } from "./parser"

	import "./markdown.scss"

	export let markdown: string

	const parsed = parseMarkdown(markdown)
</script>

<article class="markdown">{@html parsed}</article>
