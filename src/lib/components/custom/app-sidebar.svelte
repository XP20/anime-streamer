<script lang="ts" module>
    import { House, Search, List, Calendar, Settings } from 'lucide-svelte';
    const sidebarEntries = {
        content: [{
            label: undefined,
            footer: false,
            entries: [
                // { icon: House, title: 'Home', href: '/' },                  // All content aggregated
                { icon: Calendar, title: 'Schedule', href: '/schedule' },   // Release schedule and seasons view
                // { icon: Search, title: 'Search', href: '/search' },         // Advanced search / with filtering
                { icon: List, title: 'My list', href: '/my-list' },         // List management, trackers etc.
            ],
        }],
        footer: [{
            label: undefined,
            footer: true,
            entries: [
                { icon: Settings, title: 'Settings', href: '/settings' },   // Settings view
            ],
        }],
    };
</script>

<script lang="ts">
    import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "$lib/components/ui/sidebar";
	import type { ComponentProps } from "svelte";
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

    let { ref = $bindable(null), ...restProps }
        : ComponentProps<typeof Sidebar> = $props();
</script>

<Sidebar
    collapsible="offcanvas"
    variant="floating"
    class="top-16 pb-[4.5rem] ml-2 -mt-2"
    {...restProps}
    bind:ref
>
    <!-- <SidebarHeader class="h-14">
        <span class="text-sm m-2 font-mono">🔴 🟡 🟢</span>
    </SidebarHeader> -->
    <SidebarContent class="p-0">
        {#each sidebarEntries.content as group }
            <SidebarGroup class="p-2">
                {#if group.label}
                    <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                {/if}
                <SidebarGroupContent>
                    <SidebarMenu>
                        {#each group.entries as entry }
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    size="lg"
                                    class="px-5"
                                    isActive={page.url.pathname === entry.href}
                                    onclick={() => goto(entry.href)}
                                >
                                    <entry.icon style="height: 22px; width: 22px;" class="mr-1" />
                                    <!-- TODO: Fix align height -->
                                    <span class="font-bold">{entry.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        {/each}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        {/each}
    </SidebarContent>
    <SidebarFooter class="p-0">
        {#each sidebarEntries.footer as group }
            <SidebarGroup class="p-2">
                {#if group.label}
                    <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                {/if}
                <SidebarGroupContent>
                    <SidebarMenu>
                        {#each group.entries as entry }
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    size="lg"
                                    class="px-5"
                                    isActive={page.url.pathname === entry.href}
                                    onclick={() => goto(entry.href)}
                                >
                                    <entry.icon style="height: 22px; width: 22px;" class="mr-1" />
                                    <!-- TODO: Fix align height -->
                                    <span class="font-bold">{entry.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        {/each}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        {/each}
    </SidebarFooter>
    <!-- <SidebarRail /> -->
</Sidebar>