<script lang="ts">
	import { PanelLeft } from 'lucide-svelte';
	import { sidebarState } from '$lib/features/layout/sidebar.state.svelte';
	import { i18n } from '$lib/i18n/index.svelte';
</script>

{#if sidebarState.collapsed}
	<button
		onclick={() => sidebarState.expand()}
		class="shrink-0 rounded-md p-1 text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]"
		title={i18n.t('sidebar.expand_sidebar')}
	>
		<PanelLeft size={16} />
	</button>
{/if}
