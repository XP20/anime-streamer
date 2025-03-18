<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import { Toaster } from '$lib/components/ui/sonner';
    import { SidebarInset, SidebarProvider } from "$lib/components/ui/sidebar";
	
	import '../app.css';
	import Header from '$lib/components/custom/header.svelte';
	let { children } = $props();

	let refSearchbar = $state<HTMLInputElement | null>(null);
	function onKeyDown(event: KeyboardEvent) {
		if (event.repeat) return;

		switch(event.key) {
			case 'k':
			case 'K':
				if (event.ctrlKey) {
					event.preventDefault();
					refSearchbar?.focus();
				}
				break;
			case 'Escape':
				event.preventDefault();
				refSearchbar?.blur();
				break;
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<Toaster />
<ModeWatcher />

<Header bind:searchbar={refSearchbar} />
<span class="h-screen pt-16 flex">
	{@render children()}
</span>
