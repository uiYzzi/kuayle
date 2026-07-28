import type { TranslationKey } from '../en';

export const sidebar = {
	// Navigation items
	'sidebar.inbox': '收件箱',
	'sidebar.my_issues': '我的事项',
	'sidebar.insights': '洞察',
	'sidebar.dev_machines': '开发机',
	'sidebar.my_views': '我的视图',
	'sidebar.all_projects': '全部项目',

	// Section headers
	'sidebar.favorites': '收藏',
	'sidebar.teams': '团队',
	'sidebar.views': '视图',
	'sidebar.projects': '项目',

	// Team sub-items
	'sidebar.issues': '事项',
	'sidebar.cycles': '周期',
	'sidebar.triage': '待处理',

	// Actions
	'sidebar.search': '搜索',
	'sidebar.new_issue': '新建事项',
	'sidebar.create_team': '创建团队',
	'sidebar.create_first_team': '创建你的第一个团队',
	'sidebar.create_issue': '创建事项',
	'sidebar.cancel': '取消',
	'sidebar.working': '处理中...',

	// Context menu items
	'sidebar.open_team': '打开团队',
	'sidebar.team_settings': '团队设置',
	'sidebar.leave_team': '离开团队...',
	'sidebar.delete_team': '删除团队...',
	'sidebar.open_project': '打开项目',
	'sidebar.open_view': '打开视图',
	'sidebar.open_in_new_tab': '在新标签页中打开',
	'sidebar.copy_link': '复制链接',
	'sidebar.delete_project': '删除项目',
	'sidebar.delete_view': '删除视图',

	// Profile popover
	'sidebar.settings': '设置',
	'sidebar.log_out': '退出登录',
	'sidebar.keyboard_shortcuts': '键盘快捷键',
	'sidebar.keyboard_shortcuts_hint': '键盘快捷键 (?)',

	// Sidebar toggle/resize
	'sidebar.drag_resize': '拖动调整大小 … 点击折叠',
	'sidebar.expand_sidebar': '展开侧边栏',
	'sidebar.close_sidebar': '关闭侧边栏',

	// Mobile layout
	'sidebar.workspace_navigation': '工作区导航',
	'sidebar.navigate_sections': '导航工作区分区、团队、视图和项目。',
	'sidebar.open_navigation': '打开导航',

	// Toast messages
	'sidebar.link_copied': '链接已复制',
	'sidebar.view_deleted': '视图已删除',
	'sidebar.failed_delete_view': '删除视图失败',
	'sidebar.project_deleted': '项目已删除',
	'sidebar.failed_delete_project': '删除项目失败',
	'sidebar.team_created': '团队已创建',
	'sidebar.failed_create_team': '创建团队失败',
	'sidebar.team_deleted': '团队已删除',
	'sidebar.left_team': '已离开团队',
	'sidebar.failed_create_issue': '创建事项失败',
	'sidebar.failed_leave_team': '离开团队失败',
	'sidebar.failed_delete_team': '删除团队失败',

	// Shortcut labels
	'sidebar.go_inbox': '跳转到收件箱',
	'sidebar.go_my_issues': '跳转到我的事项',
	'sidebar.go_insights': '跳转到洞察',
	'sidebar.go_projects': '跳转到项目',
	'sidebar.go_settings': '跳转到设置',
	'sidebar.command_palette': '命令面板',

	// Shortcut categories
	'sidebar.navigation': '导航',
	'sidebar.actions': '操作',
	'sidebar.help': '帮助',

	// Shortcut help
	'sidebar.shortcuts_desc': '使用这些快捷键更快地导航。',
	'sidebar.shortcut_then': '然后',

	// Workspace switcher
	'sidebar.workspaces': '工作区',
	'sidebar.create_workspace': '创建工作区',
	'sidebar.create_workspace_desc': '为你的团队、项目和事项设置新的工作区。',
	'sidebar.workspace_name': '工作区名称',
	'sidebar.workspace_name_placeholder': 'Acme Engineering',
	'sidebar.workspace_url': '工作区 URL',
	'sidebar.workspace_url_placeholder': 'acme-engineering',
	'sidebar.workspace_url_desc': '这将成为工作区 URL 路径。',
	'sidebar.creating': '创建中...',
	'sidebar.workspace_created': '工作区已创建',
	'sidebar.failed_create_workspace': '创建工作区失败',

	// Command palette
	'sidebar.type_command': '输入命令或搜索...',
	'sidebar.cmd_close': '关闭',
	'sidebar.commands': '命令',
	'sidebar.no_issues_found': '未找到事项',
	'sidebar.no_results': '未找到结果',
	'sidebar.cmd_keyboard': '键盘',
	'sidebar.cmd_move_selection': '移动选择',
	'sidebar.cmd_open_selected': '打开选中项',
	'sidebar.search_matches': '搜索匹配',
	'sidebar.cmd_search_matches_desc': '事项搜索涵盖你通常浏览的详情：标题、描述、状态、项目、指派人、标签、周期、截止日期、团队和优先级。描述匹配包含简短的高亮片段。',
	'sidebar.go_to_team': '跳转到 {name}',

	// Confirm team dialog
	'sidebar.delete_team_title': '删除团队',
	'sidebar.leave_team_title': '离开团队',
	'sidebar.delete_team_desc': '这将永久删除 {name} 及其事项、周期和状态。',
	'sidebar.leave_team_desc': '你将离开 {name}。如果你是最后一个成员或工作区所有者，团队将被删除。',
	'sidebar.this_team': '此团队',

	// Delete view dialog
	'sidebar.delete_view_question': '删除视图？',
	'sidebar.delete_view_confirm': '这将永久删除 {name}。',
	'sidebar.delete_view_button': '删除视图',
	'sidebar.this_view': '此视图',

	// Create team dialog
	'sidebar.create_team_title': '创建团队',
	'sidebar.create_team_desc': '团队用于组织事项和成员。',
	'sidebar.identifier': '标识符',
	'sidebar.identifier_desc': '用作事项前缀（例如 ENG-123）',
	'sidebar.description_optional': '描述（可选）',
	'sidebar.team_desc_placeholder': '这个团队负责什么工作？',

	// Generic
	'sidebar.name': '名称'
} as Record<string, string>;
