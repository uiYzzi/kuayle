import { i18n } from '$lib/i18n/index.svelte';
import type { TranslationKey } from '$lib/i18n/locales/en';

export type StatusCategory = 'backlog' | 'unstarted' | 'started' | 'completed' | 'cancelled';

export interface TeamStatus {
	id: string;
	team_id: string;
	name: string;
	slug: string;
	category: StatusCategory;
	color: string | null;
	position: number;
	is_default: boolean;
	project_ids?: string[];
	created_at: string;
	updated_at: string;
}

export const CATEGORY_ORDER: StatusCategory[] = ['backlog', 'unstarted', 'started', 'completed', 'cancelled'];

export function getCategoryLabel(category: StatusCategory): string {
	const key = `common.category.${category}` as TranslationKey;
	return i18n.t(key);
}

export function getCategoryLabels(): Record<StatusCategory, string> {
	return {
		backlog: i18n.t('common.category.backlog'),
		unstarted: i18n.t('common.category.unstarted'),
		started: i18n.t('common.category.started'),
		completed: i18n.t('common.category.completed'),
		cancelled: i18n.t('common.category.cancelled')
	};
}
