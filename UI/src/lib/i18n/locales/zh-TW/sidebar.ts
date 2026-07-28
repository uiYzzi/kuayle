import type { TranslationKey } from '../en';

export const sidebar = {
	// Navigation items
	'sidebar.inbox': '收件匣',
	'sidebar.my_issues': '我的事項',
	'sidebar.insights': '洞察',
	'sidebar.dev_machines': '開發機',
	'sidebar.my_views': '我的檢視',
	'sidebar.all_projects': '全部專案',

	// Section headers
	'sidebar.favorites': '收藏',
	'sidebar.teams': '團隊',
	'sidebar.views': '檢視',
	'sidebar.projects': '專案',

	// Team sub-items
	'sidebar.issues': '事項',
	'sidebar.cycles': '週期',
	'sidebar.triage': '待處理',

	// Actions
	'sidebar.search': '搜尋',
	'sidebar.new_issue': '新建事項',
	'sidebar.create_team': '建立團隊',
	'sidebar.create_first_team': '建立你的第一個團隊',
	'sidebar.create_issue': '建立事項',
	'sidebar.cancel': '取消',
	'sidebar.working': '處理中...',

	// Context menu items
	'sidebar.open_team': '開啟團隊',
	'sidebar.team_settings': '團隊設定',
	'sidebar.leave_team': '離開團隊...',
	'sidebar.delete_team': '刪除團隊...',
	'sidebar.open_project': '開啟專案',
	'sidebar.open_view': '開啟檢視',
	'sidebar.open_in_new_tab': '在新分頁中開啟',
	'sidebar.copy_link': '複製連結',
	'sidebar.delete_project': '刪除專案',
	'sidebar.delete_view': '刪除檢視',

	// Profile popover
	'sidebar.settings': '設定',
	'sidebar.log_out': '登出',
	'sidebar.keyboard_shortcuts': '鍵盤快速鍵',
	'sidebar.keyboard_shortcuts_hint': '鍵盤快速鍵 (?)',

	// Sidebar toggle/resize
	'sidebar.drag_resize': '拖動調整大小 … 點擊摺疊',
	'sidebar.expand_sidebar': '展開側邊欄',
	'sidebar.close_sidebar': '關閉側邊欄',

	// Mobile layout
	'sidebar.workspace_navigation': '工作區導覽',
	'sidebar.navigate_sections': '導覽工作區分區、團隊、檢視和專案。',
	'sidebar.open_navigation': '開啟導覽',

	// Toast messages
	'sidebar.link_copied': '連結已複製',
	'sidebar.view_deleted': '檢視已刪除',
	'sidebar.failed_delete_view': '刪除檢視失敗',
	'sidebar.project_deleted': '專案已刪除',
	'sidebar.failed_delete_project': '刪除專案失敗',
	'sidebar.team_created': '團隊已建立',
	'sidebar.failed_create_team': '建立團隊失敗',
	'sidebar.team_deleted': '團隊已刪除',
	'sidebar.left_team': '已離開團隊',
	'sidebar.failed_create_issue': '建立事項失敗',
	'sidebar.failed_leave_team': '離開團隊失敗',
	'sidebar.failed_delete_team': '刪除團隊失敗',

	// Shortcut labels
	'sidebar.go_inbox': '跳轉到收件匣',
	'sidebar.go_my_issues': '跳轉到我的事項',
	'sidebar.go_insights': '跳轉到洞察',
	'sidebar.go_projects': '跳轉到專案',
	'sidebar.go_settings': '跳轉到設定',
	'sidebar.command_palette': '命令面板',

	// Shortcut categories
	'sidebar.navigation': '導覽',
	'sidebar.actions': '操作',
	'sidebar.help': '說明',

	// Shortcut help
	'sidebar.shortcuts_desc': '使用這些快速鍵更快地導覽。',
	'sidebar.shortcut_then': '然後',

	// Workspace switcher
	'sidebar.workspaces': '工作區',
	'sidebar.create_workspace': '建立工作區',
	'sidebar.create_workspace_desc': '為你的團隊、專案和事項設定新的工作區。',
	'sidebar.workspace_name': '工作區名稱',
	'sidebar.workspace_name_placeholder': 'Acme Engineering',
	'sidebar.workspace_url': '工作區 URL',
	'sidebar.workspace_url_placeholder': 'acme-engineering',
	'sidebar.workspace_url_desc': '這將成為工作區 URL 路徑。',
	'sidebar.creating': '建立中...',
	'sidebar.workspace_created': '工作區已建立',
	'sidebar.failed_create_workspace': '建立工作區失敗',

	// Command palette
	'sidebar.type_command': '輸入命令或搜尋...',
	'sidebar.cmd_close': '關閉',
	'sidebar.commands': '命令',
	'sidebar.no_issues_found': '未找到事項',
	'sidebar.no_results': '未找到結果',
	'sidebar.cmd_keyboard': '鍵盤',
	'sidebar.cmd_move_selection': '移動選取',
	'sidebar.cmd_open_selected': '開啟選取項',
	'sidebar.search_matches': '搜尋匹配',
	'sidebar.cmd_search_matches_desc': '事項搜尋涵蓋你通常瀏覽的詳情：標題、描述、狀態、專案、指派人、標籤、週期、截止日期、團隊和優先級。描述匹配包含簡短的高亮片段。',
	'sidebar.go_to_team': '跳轉到 {name}',

	// Confirm team dialog
	'sidebar.delete_team_title': '刪除團隊',
	'sidebar.leave_team_title': '離開團隊',
	'sidebar.delete_team_desc': '這將永久刪除 {name} 及其事項、週期和狀態。',
	'sidebar.leave_team_desc': '你將離開 {name}。如果你是最後一個成員或工作區所有者，團隊將被刪除。',
	'sidebar.this_team': '此團隊',

	// Delete view dialog
	'sidebar.delete_view_question': '刪除檢視？',
	'sidebar.delete_view_confirm': '這將永久刪除 {name}。',
	'sidebar.delete_view_button': '刪除檢視',
	'sidebar.this_view': '此檢視',

	// Create team dialog
	'sidebar.create_team_title': '建立團隊',
	'sidebar.create_team_desc': '團隊用於組織事項和成員。',
	'sidebar.identifier': '識別碼',
	'sidebar.identifier_desc': '用作事項前綴（例如 ENG-123）',
	'sidebar.description_optional': '描述（可選）',
	'sidebar.team_desc_placeholder': '這個團隊負責什麼工作？',

	// Generic
	'sidebar.name': '名稱'
} as Record<string, string>;
