export const projects = {
	'projects.title': 'Projects',
	'projects.new_project': 'New Project',
	'projects.no_projects': 'No projects yet',
	'projects.no_projects_desc': 'Create a project to organize your issues',
	'projects.no_team_projects': 'No projects for this team',
	'projects.no_team_projects_desc': "Create a project to organize this team's issues",
	'projects.no_issues': 'No issues in this project',
	'projects.no_issues_desc': 'Assign issues to this project when creating or editing them',
	'projects.progress': '{completed} of {total} issues done',

	// Create dialog
	'projects.create.title': 'Create project',
	'projects.create.description': 'Projects group related issues together.',
	'projects.create.name_placeholder': 'e.g. Q1 Launch',
	'projects.create.description_placeholder': 'What is this project about?',
	'projects.create.select_team': 'Select team',
	'projects.create.no_team': 'No team',

	// Project detail
	'projects.delete': 'Delete project',
	'projects.list_view': 'List view',
	'projects.gantt_view': 'Gantt view',
	'projects.start_date': 'Start:',
	'projects.set_start': 'Set start',
	'projects.target_date': 'Target:',
	'projects.set_target': 'Set target',

	// Form fields
	'projects.field.team': 'Team',

	// Status
	'projects.status.planned': 'Planned',
	'projects.status.in_progress': 'In Progress',
	'projects.status.completed': 'Completed',
	'projects.status.cancelled': 'Cancelled',

	// Development dialog
	'projects.development.title': 'Project development',
	'projects.development.description': 'Choose defaults for issue repositories and machine environments in this project.',
	'projects.development.permission_note': 'Workspace owners and admins manage project development defaults.',
	'projects.development.repository': 'Repository',
	'projects.development.environment': 'Environment',
	'projects.development.inherited_default': 'Use inherited default',
	'projects.development.team_or_workspace_default': 'Use team or workspace default',
	'projects.development.loading': 'Loading development settings',
	'projects.development.settings': 'Development settings',
	'projects.development.view_settings': 'View development settings',
	'projects.development.unavailable': 'Development settings unavailable',

	// Gantt
	'projects.gantt.today': 'Today',
	'projects.gantt.no_due_date': 'No due date',
	'projects.gantt.filter': 'Filter',
	'projects.gantt.clear': 'Clear',
	'projects.gantt.issues_count': '{count} issue{plural}',
	'projects.gantt.status': 'Status',
	'projects.gantt.due_date': 'Due date',
	'projects.gantt.all': 'All',
	'projects.gantt.has_due': 'Has due',
	'projects.gantt.no_due': 'No due',
	'projects.gantt.no_match': 'No issues match the current filters',
	'projects.gantt.no_issues': 'No issues to display',

	// Toast
	'projects.toast.created': 'Project created',
	'projects.toast.not_found': 'Project not found',
	'projects.toast.deleted': 'Project deleted',
	'projects.toast.status_updated': 'Status updated',
	'projects.toast.date_updated': 'Date updated',
	'projects.toast.development_saved': 'Project development settings saved',
	'projects.toast.failed_create': 'Failed to create project',
	'projects.toast.failed_delete': 'Failed to delete project',
	'projects.toast.failed_update_status': 'Failed to update status',
	'projects.toast.failed_update_date': 'Failed to update date',
	'projects.toast.failed_load_development': 'Failed to load project development settings',
	'projects.toast.failed_save_development': 'Failed to save project development settings',
} as const;
