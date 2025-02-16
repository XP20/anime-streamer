<script lang="ts">
	import { SidebarClose, SidebarOpen } from "lucide-svelte";
	import { Button } from "../ui/button";
	import { useSidebar } from "../ui/sidebar";

    let { sidebar = useSidebar() } = $props();
    let isOpen = $derived(sidebar.open && !sidebar.isMobile);
</script>

<Button
    onclick={() => sidebar.toggle()}
    variant="ghost"
    class="border-sidebar-border min-w-10 min-h-10 max-h-10 max-w-10 {isOpen && 'bg-accent'}"
>
    {#if isOpen}
        <SidebarClose />
    {:else}
        <SidebarOpen />
    {/if}
</Button>