export const sidebar = {
	// Navigation items
	'sidebar.inbox': 'Inbox',
	'sidebar.my_issues': 'My Issues',
	'sidebar.insights': 'Insights',
	'sidebar.dev_machines': 'Dev Machines',
	'sidebar.my_views': 'My Views',
	'sidebar.all_projects': 'All Projects',

	// Section headers
	'sidebar.favorites': 'Favorites',
	'sidebar.teams': 'Teams',
	'sidebar.views': 'Views',
	'sidebar.projects': 'Projects',

	// Team sub-items
	'sidebar.issues': 'Issues',
	'sidebar.cycles': 'Cycles',
	'sidebar.triage': 'Triage',

	// Actions
	'sidebar.search': 'Search',
	'sidebar.new_issue': 'New issue',
	'sidebar.create_team': 'Create team',
	'sidebar.create_first_team': 'Create your first team',
	'sidebar.create_issue': 'Create issue',
	'sidebar.cancel': 'Cancel',
	'sidebar.working': 'Working...',

	// Context menu items
	'sidebar.open_team': 'Open team',
	'sidebar.team_settings': 'Team settings',
	'sidebar.leave_team': 'Leave team...',
	'sidebar.delete_team': 'Delete team...',
	'sidebar.open_project': 'Open project',
	'sidebar.open_view': 'Open view',
	'sidebar.open_in_new_tab': 'Open in new tab',
	'sidebar.copy_link': 'Copy link',
	'sidebar.delete_project': 'Delete project',
	'sidebar.delete_view': 'Delete view',

	// Profile popover
	'sidebar.settings': 'Settings',
	'sidebar.log_out': 'Log out',
	'sidebar.keyboard_shortcuts': 'Keyboard shortcuts',
	'sidebar.keyboard_shortcuts_hint': 'Keyboard shortcuts (?)',

	// Sidebar toggle/resize
	'sidebar.drag_resize': 'Drag to resize … Click to collapse',
	'sidebar.expand_sidebar': 'Expand sidebar',
	'sidebar.close_sidebar': 'Close sidebar',

	// Mobile layout
	'sidebar.workspace_navigation': 'Workspace navigation',
	'sidebar.navigate_sections': 'Navigate workspace sections, teams, views, and projects.',
	'sidebar.open_navigation': 'Open navigation',

	// Toast messages
	'sidebar.link_copied': 'Link copied',
	'sidebar.view_deleted': 'View deleted',
	'sidebar.failed_delete_view': 'Failed to delete view',
	'sidebar.project_deleted': 'Project deleted',
	'sidebar.failed_delete_project': 'Failed to delete project',
	'sidebar.team_created': 'Team created',
	'sidebar.failed_create_team': 'Failed to create team',
	'sidebar.team_deleted': 'Team deleted',
	'sidebar.left_team': 'Left team',
	'sidebar.failed_create_issue': 'Failed to create issue',
	'sidebar.failed_leave_team': 'Failed to leave team',
	'sidebar.failed_delete_team': 'Failed to delete team',

	// Shortcut labels
	'sidebar.go_inbox': 'Go to Inbox',
	'sidebar.go_my_issues': 'Go to My Issues',
	'sidebar.go_insights': 'Go to Insights',
	'sidebar.go_projects': 'Go to Projects',
	'sidebar.go_settings': 'Go to Settings',
	'sidebar.command_palette': 'Command palette',

	// Shortcut categories
	'sidebar.navigation': 'Navigation',
	'sidebar.actions': 'Actions',
	'sidebar.help': 'Help',

	// Shortcut help
	'sidebar.shortcuts_desc': 'Navigate faster with these shortcuts.',
	'sidebar.shortcut_then': 'then',

	// Workspace switcher
	'sidebar.workspaces': 'Workspaces',
	'sidebar.create_workspace': 'Create workspace',
	'sidebar.create_workspace_desc': 'Set up a new workspace for your team, projects, and issues.',
	'sidebar.workspace_name': 'Workspace name',
	'sidebar.workspace_name_placeholder': 'Acme Engineering',
	'sidebar.workspace_url': 'Workspace URL',
	'sidebar.workspace_url_placeholder': 'acme-engineering',
	'sidebar.workspace_url_desc': 'This becomes the workspace URL path.',
	'sidebar.creating': 'Creating...',
	'sidebar.workspace_created': 'Workspace created',
	'sidebar.failed_create_workspace': 'Failed to create workspace',

	// Command palette
	'sidebar.type_command': 'Type a command or search...',
	'sidebar.cmd_close': 'Close',
	'sidebar.commands': 'Commands',
	'sidebar.no_issues_found': 'No issues found',
	'sidebar.no_results': 'No results found',
	'sidebar.cmd_keyboard': 'Keyboard',
	'sidebar.cmd_move_selection': 'Move selection',
	'sidebar.cmd_open_selected': 'Open selected',
	'sidebar.search_matches': 'Search matches',
	'sidebar.cmd_search_matches_desc': 'Issue search looks across the details you usually scan: title, description, status, project, assignees, labels, cycle, due date, team, and priority. Description matches include a short highlighted snippet.',
	'sidebar.go_to_team': 'Go to {name}',

	// Confirm team dialog
	'sidebar.delete_team_title': 'Delete team',
	'sidebar.leave_team_title': 'Leave team',
	'sidebar.delete_team_desc': 'This will permanently delete {name} and its issues, cycles, and statuses.',
	'sidebar.leave_team_desc': 'You will leave {name}. If you are the last member or workspace owner, the team will be deleted.',
	'sidebar.this_team': 'this team',

	// Delete view dialog
	'sidebar.delete_view_question': 'Delete view?',
	'sidebar.delete_view_confirm': 'This will permanently delete {name}.',
	'sidebar.delete_view_button': 'Delete view',
	'sidebar.this_view': 'this view',

	// Create team dialog
	'sidebar.create_team_title': 'Create team',
	'sidebar.create_team_desc': 'Teams organize issues and members.',
	'sidebar.identifier': 'Identifier',
	'sidebar.identifier_desc': 'Used as issue prefix (e.g. ENG-123)',
	'sidebar.description_optional': 'Description (optional)',
	'sidebar.team_desc_placeholder': 'What does this team work on?',

	// Generic
	'sidebar.name': 'Name'
} as const;
