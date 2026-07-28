import type { TranslationKey } from '../en';

export const views: Record<string, string> = {
	'views.title': '视图',
	'views.shared': '已共享',
	'views.owner': '所有者',
	'views.share_link': '分享链接',
	'views.delete_view': '删除视图',
	'views.no_issues_match': '没有匹配此视图的议题',
	'views.no_issues_match_desc': '调整筛选条件或添加新议题',
	'views.no_team_views': '此团队暂无视图',
	'views.no_team_views_desc': '从团队议题页面保存筛选条件，并选择团队可见性以在此处共享视图。',
	'views.delete_title': '删除视图？',
	'views.delete_desc': '这将永久删除 {name}。',

	// Toast
	'views.toast.not_found': '未找到视图',
	'views.toast.name_updated': '视图名称已更新',
	'views.toast.failed_update': '更新视图失败',
	'views.toast.deleted': '视图已删除',
	'views.toast.failed_delete': '删除视图失败',
	'views.toast.failed_save_filters': '保存筛选条件失败',
} as Record<string, string>;
