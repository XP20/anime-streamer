<script lang="ts">
	import { Home, Search } from "lucide-svelte";

	import { CommandShortcut } from "../ui/command";
	import { useSidebar } from "../ui/sidebar";
	import { buttonVariants } from "../ui/button/button.svelte";
	import { cn } from "$lib/utils";

    const sidebar = useSidebar();
    let { searchbar = $bindable(null) } = $props();
</script>

<header class="flex h-16 items-center px-4 fixed top-0 w-screen z-10 bg-background">
    <span class="flex flex-1 items-center gap-2 mr-2 max-sm:hidden">
        <a
            href="/"
            class={cn(
                buttonVariants({ variant: 'sidebar' }),
                'rounded-full w-12 h-12 p-0 ml-auto group'
            )}
        >
            <Home class="!w-6 !h-6 opacity-50 text-foreground group-focus:opacity-100" />
        </a>
    </span>
    <span class="flex p-4 items-center w-full sm:max-w-lg h-12 mb-[2px] relative">
        <input
            type="search"
            placeholder="Search anime..."
            class={cn(
                buttonVariants({ variant: 'sidebar' }),
                'absolute -m-4 h-12 w-full rounded-full indent-9 text-md placeholder:text-foreground/50 peer'
            )}
            bind:this={searchbar}
        >
        <Search class="z-10 opacity-50 pointer-events-none peer-focus:opacity-100" />
        <CommandShortcut class="z-10 text-sm text-foreground/30 pointer-events-none max-sm:hidden">⌘K</CommandShortcut>
    </span>
    <span class="flex flex-1 items-center gap-2 ml-2 max-sm:hidden"></span>
</header>