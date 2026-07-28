import type { TranslationKey } from './en';
import { settingsNav } from './zh-CN/settings-nav';
import { preferences } from './zh-CN/preferences';
import { sidebar } from './zh-CN/sidebar';
import { login } from './zh-CN/login';
import { myIssues } from './zh-CN/my-issues';
import { inbox } from './zh-CN/inbox';
import { common } from './zh-CN/common';
import { settingsPages } from './zh-CN/settings-pages';
import { issueDetail } from './zh-CN/issue-detail';
import { sharedComponents } from './zh-CN/shared-components';
import { teamSettings } from './zh-CN/team-settings';
import { insights } from './zh-CN/insights';
import { machines } from './zh-CN/machines';
import { cycles } from './zh-CN/cycles';
import { projects } from './zh-CN/projects';
import { views } from './zh-CN/views';

export const zhCN: Record<string, string> = {
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
};
