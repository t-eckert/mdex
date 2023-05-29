<script lang="ts">
	import MenuIcon from "./MenuIcon.svelte"
	import type { Directory, File } from "../../lib/interfaces"

	function toggleMenu() {
		const menu = document.querySelector("section")
		if (!menu) return
		menu.classList.toggle("hidden")
	}

	export let directories: Directory[]
	export let files: File[]
</script>

<div class="menu-icon">
	<button on:click={toggleMenu}><MenuIcon /></button>
</div>
<section class="hidden">
	<nav>
		<ul id="directories">
			{#each directories as directory}
				<li><a href={directory.href}>{directory.name}</a></li>
			{/each}
		</ul>

		<ul id="files">
			{#each files as file}
				<li><a href={file.href}>{file.name}</a></li>
			{/each}
		</ul>
	</nav>
</section>

<style>
	.menu-icon {
		z-index: 2;
		position: fixed;
		top: 3rem;
		left: 3rem;
	}

	.hidden {
		display: none;
	}

	section {
		z-index: 1;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-items: start;
		align-items: start;
		gap: 0.5rem;
		top: 2rem;
		left: 2rem;
		min-width: 12rem;
		border-radius: 0.5rem;
		padding: 1rem;
		padding-top: 3rem;
		background-color: var(--background);
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
	}

	button {
		border-radius: 0.25rem;
	}

	button:hover {
		background-color: var(--midtone);
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	ul#directories {
		display: flex;
		gap: 0.5rem;
	}

	ul#directories > li {
		list-style: none;
	}

	ul#directories > li::after {
		content: "/";
		margin-left: 0.1rem;
	}
</style>
