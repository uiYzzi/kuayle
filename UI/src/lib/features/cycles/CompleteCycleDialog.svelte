<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import type { Cycle } from '$lib/types/cycle';
	import { i18n } from '$lib/i18n/index.svelte';

	let {
		open = $bindable(false),
		cycle,
		incompleteCount = 0,
		nextUpcomingCycle = null,
		onsubmit
	}: {
		open: boolean;
		cycle: Cycle | null;
		incompleteCount: number;
		nextUpcomingCycle: Cycle | null;
		onsubmit: (data: { retrospective?: string; carry_over: boolean }) => void;
	} = $props();

	let retrospective = $state('');
	let carryOver = $state(false);

	$effect(() => {
		if (open) {
			retrospective = '';
			carryOver = false;
		}
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onsubmit({
			retrospective: retrospective.trim() || undefined,
			carry_over: carryOver
		});
		open = false;
	}
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="sm:max-w-[420px] border-[var(--app-border)] bg-[var(--color-bg-secondary)] p-0 overflow-hidden rounded-xl">
		<form onsubmit={handleSubmit}>
			<div class="px-5 pt-5 pb-4 space-y-4">
				<div>
					<h2 class="text-base font-semibold text-[var(--color-text-primary)]">{i18n.t('cycles.complete.title')}</h2>
					<p class="mt-0.5 text-xs text-[var(--color-text-tertiary)]">
						{#if cycle}{i18n.t('cycles.complete.mark_prefix')}<strong>{cycle.name}</strong>{i18n.t('cycles.complete.mark_suffix')}{/if}
					</p>
				</div>

				{#if cycle?.progress}
					<div class="rounded-md border border-[var(--app-border)] bg-[var(--color-bg)] px-3 py-2 text-xs text-[var(--color-text-secondary)]">
						<div class="flex justify-between">
							<span>{i18n.t('cycles.status.completed')}</span>
							<span class="text-[var(--color-text-primary)]">{cycle.progress.completed} of {cycle.progress.total}</span>
						</div>
						{#if incompleteCount > 0}
							<div class="flex justify-between mt-1">
								<span>{i18n.t('cycles.incomplete')}</span>
								<span class="text-[var(--color-text-primary)]">{incompleteCount}</span>
							</div>
						{/if}
					</div>
				{/if}

				{#if incompleteCount > 0 && nextUpcomingCycle}
					<label class="flex items-start gap-2 cursor-pointer">
						<input
							type="checkbox"
							bind:checked={carryOver}
							class="mt-0.5 rounded border-[var(--app-border)]"
						/>
						<span class="text-xs text-[var(--color-text-secondary)]">
							{i18n.t('cycles.complete.carry_over_prefix')}{incompleteCount}{incompleteCount > 1 ? i18n.t('cycles.complete.incomplete_to') : i18n.t('cycles.complete.incomplete_to')}{i18n.t('cycles.complete.to')}<strong>{nextUpcomingCycle.name}</strong>
						</span>
					</label>
				{:else if incompleteCount > 0}
					<p class="text-xs text-[var(--color-text-tertiary)]">
						{incompleteCount}{incompleteCount > 1 ? i18n.t('cycles.complete.incomplete_to') : i18n.t('cycles.complete.incomplete_to')}{i18n.t('cycles.complete.no_upcoming_suffix')}
					</p>
				{/if}

				<div class="space-y-1.5">
					<Label class="text-xs text-[var(--color-text-secondary)]">{i18n.t('cycles.retrospective')} <span class="text-[var(--color-text-tertiary)]">{i18n.t('cycles.field.optional')}</span></Label>
					<Textarea
						bind:value={retrospective}
						placeholder={i18n.t('cycles.edit.retrospective_placeholder')}
						rows={3}
						class="bg-[var(--color-bg)] border-[var(--app-border)] text-[var(--color-text-primary)] resize-none text-sm"
					/>
				</div>
			</div>

			<div class="flex justify-end gap-2 border-t border-[var(--app-border)] px-5 py-3">
				<Button variant="outline" size="sm" type="button" onclick={() => (open = false)}>{i18n.t('common.cancel')}</Button>
				<Button size="sm" type="submit">{i18n.t('cycles.complete.title')}</Button>
			</div>
		</form>
	</Dialog.Content>
</Dialog.Root>
