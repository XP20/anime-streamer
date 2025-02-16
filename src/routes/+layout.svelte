<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import { Toaster } from '$lib/components/ui/sonner';
    import { SidebarInset, SidebarProvider, SidebarTrigger } from "$lib/components/ui/sidebar";
    import AppSidebar from "$lib/components/custom/app-sidebar.svelte";
	
	import '../app.css';
	import Header from '$lib/components/custom/header.svelte';
	let { children } = $props();

	let refSearchbar = $state<HTMLInputElement | null>(null);
	function onKeyDown(event: KeyboardEvent) {
		if (event.repeat) return;

		switch(event.key) {
			case 'k':
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

<SidebarProvider>
	<Header bind:searchbar={refSearchbar} />
    <AppSidebar />
    <SidebarInset class="top-16">
		{@render children()}
    </SidebarInset>
</SidebarProvider>
