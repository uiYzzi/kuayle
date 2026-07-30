import type { TranslationKey } from '../en';

export const views: Record<string, string> = {
	'views.title': '視圖',
	'views.shared': '已共享',
	'views.owner': '擁有者',
	'views.share_link': '分享連結',
	'views.delete_view': '刪除視圖',
	'views.no_issues_match': '沒有符合此視圖的議題',
	'views.no_issues_match_desc': '調整篩選條件或新增議題',
	'views.no_team_views': '此團隊暫無視圖',
	'views.no_team_views_desc': '從團隊議題頁面儲存篩選條件，並選擇團隊可見性以在此處分享視圖。',
	'views.my_views': '我的視圖',
	'views.no_personal_views': '沒有個人視圖',
	'views.no_personal_views_desc': '儲存篩選器並選擇個人可見性，將視圖保留在此處。',
	'views.delete_title': '刪除視圖？',
	'views.delete_desc': '這將永久刪除 {name}。',

	// Toast
	'views.toast.not_found': '找不到視圖',
	'views.toast.name_updated': '視圖名稱已更新',
	'views.toast.failed_update': '更新視圖失敗',
	'views.toast.deleted': '視圖已刪除',
	'views.toast.failed_delete': '刪除視圖失敗',
	'views.toast.failed_save_filters': '儲存篩選條件失敗',
} as Record<string, string>;
