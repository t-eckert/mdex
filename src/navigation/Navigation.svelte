<script>
	import MenuIcon from './MenuIcon.svelte';

	let directories = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Log',
			href: '/log'
		}
	];

	let files = [
		{
			name: 'README',
			href: '/README'
		},
		{
			name: 'LICENSE',
			href: '/LICENSE'
		}
	];
</script>

<section>
	<button><MenuIcon /></button>
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
		background-color: var(--light);
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
	}

	button {
		border-radius: 0.25rem;
	}

	button:hover {
		background-color: var(--dim);
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
		content: '/';
		margin-left: 0.1rem;
	}
</style>
