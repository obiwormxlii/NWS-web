<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />
<main class="bg-base-100 w-screen min-h-screen">
	{@render children()}
</main>
<Footer />
