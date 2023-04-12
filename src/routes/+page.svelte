<script>
	import Counter from './Counter.svelte';
	import penrose from '$lib/images/impossible-penrose-triangle-01.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Welcome to SvelteKit!</h1>

	<span class="image">
		<picture>
			<img src={penrose} alt="Penrose impossible triangle" />
		</picture>
	</span>

	<Counter />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.image {
		display: block;
		position: relative;
	}

	img {
		max-width: 100%;
	}
</style>
