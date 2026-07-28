import { settingsNav } from './en/settings-nav';
import { preferences } from './en/preferences';
import { sidebar } from './en/sidebar';
import { login } from './en/login';
import { myIssues } from './en/my-issues';
import { inbox } from './en/inbox';
import { common } from './en/common';
import { settingsPages } from './en/settings-pages';
import { issueDetail } from './en/issue-detail';
import { sharedComponents } from './en/shared-components';
import { teamSettings } from './en/team-settings';
import { insights } from './en/insights';
import { machines } from './en/machines';
import { cycles } from './en/cycles';
import { projects } from './en/projects';
import { views } from './en/views';

export const en = {
	...settingsNav,
	...preferences,
	...sidebar,
	...login,
	...myIssues,
	...inbox,
	...common,
	...settingsPages,
	...issueDetail,
	...sharedComponents,
	...teamSettings,
	...insights,
	...machines,
	...cycles,
	...projects,
	...views
} as const;

export type TranslationKey = keyof typeof en;
