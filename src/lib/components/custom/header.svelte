<script lang="ts">
	import { Home, Search, SidebarClose, SidebarOpen } from "lucide-svelte";

	import { CommandShortcut } from "../ui/command";
	import { useSidebar } from "../ui/sidebar";
	import Button, { buttonVariants } from "../ui/button/button.svelte";
	import { cn } from "$lib/utils";
	import SidebarTrigger from "./sidebar-trigger.svelte";

    const sidebar = useSidebar();
    let { searchbar = $bindable(null) } = $props();
</script>

<header class="flex h-16 items-center px-4 fixed top-0 w-screen z-10 bg-background">
    <span class="flex flex-1 items-center gap-2 mr-2">
        <SidebarTrigger sidebar={sidebar} />
        <a
            href="/"
            class={cn(
                buttonVariants({ variant: 'sidebar' }),
                'rounded-full w-12 h-12 p-0 ml-auto'
                // 'rounded-full w-12 h-12 p-0 bg-sidebar border border-sidebar-border ml-auto'
            )}
        ><Home class="!w-6 !h-6 opacity-50 text-foreground" /></a>
    </span>
    <span class="flex p-4 items-center w-full md:max-w-lg h-12 mb-[2px] relative">
        <Search class="z-10 opacity-50 pointer-events-none" />
        <input
            type="text"
            placeholder="Search anime..."
            class={cn(
                buttonVariants({ variant: 'sidebar' }),
                'absolute -m-4 h-12 w-full rounded-full indent-9 text-md placeholder:text-foreground/50'
            )}
            bind:this={searchbar}
        >
        <CommandShortcut class="z-10 text-sm text-foreground/30 pointer-events-none">⌘K</CommandShortcut>
    </span>
    <span class="flex flex-1 items-center gap-2"></span>
</header>