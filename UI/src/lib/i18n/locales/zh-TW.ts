import type { TranslationKey } from './en';
import { settingsNav } from './zh-TW/settings-nav';
import { preferences } from './zh-TW/preferences';
import { sidebar } from './zh-TW/sidebar';
import { login } from './zh-TW/login';
import { myIssues } from './zh-TW/my-issues';
import { inbox } from './zh-TW/inbox';
import { common } from './zh-TW/common';
import { settingsPages } from './zh-TW/settings-pages';
import { issueDetail } from './zh-TW/issue-detail';
import { sharedComponents } from './zh-TW/shared-components';
import { teamSettings } from './zh-TW/team-settings';
import { insights } from './zh-TW/insights';
import { machines } from './zh-TW/machines';
import { cycles } from './zh-TW/cycles';
import { projects } from './zh-TW/projects';
import { views } from './zh-TW/views';
import { bulkActions } from './zh-TW/bulk-actions';
import { invite } from './zh-TW/invite';

export const zhTW: Record<string, string> = {
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
	...views,
	...bulkActions,
	...invite
};
