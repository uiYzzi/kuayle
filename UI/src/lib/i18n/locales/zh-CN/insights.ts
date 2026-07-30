import type { TranslationKey } from '../en';

export const insights: Record<string, string> = {
	'insights.title': '洞察',
	'insights.team_scope': '团队范围',
	'insights.all_workspace_teams': '所有工作区团队',
	'insights.workspace_overview': '工作区概览',
	'insights.using_team_workflow': '使用该团队的工作流与成员',
	'insights.workflow_types_comparable': '状态按工作流类型跨团队分组',
	'insights.overview': '概览',
	'insights.explore': '探索',
	'insights.current_state': '当前状态',
	'insights.current_state_desc': '该范围内的实时议题与交付健康状况',
	'insights.work_distribution': '工作分布',
	'insights.using_custom_statuses': '使用 {team} 的自定义状态',
	'insights.workflow_types_comparable_teams': '工作流类型可在各团队自定义状态间比较',
	'insights.delivery_trend': '交付趋势',
	'insights.delivery_trend_desc': '已创建的工作、已完成的工作以及剩余范围',
	'insights.burnup_interval': '燃尽间隔',
	'insights.daily': '每日',
	'insights.weekly': '每周',
	'insights.monthly': '每月',
	'insights.build_insight': '构建洞察',
	'insights.build_insight_desc': '选择一个度量、分组和可选的对比维度',
	'insights.failed_load': '加载分析数据失败',
	'insights.choose_date_range': '选择一个日期范围',
	'insights.failed_load_burnup': '加载燃尽图失败',

	// Overview cards
	'insights.total_issues': '议题总数',
	'insights.open_issues': '未关闭',
	'insights.completed_issues': '已完成',
	'insights.overdue_issues': '已逾期',
	'insights.started_issues': '已开始',
	'insights.unassigned_issues': '未分配',
	'insights.completion_rate': '完成率',
	'insights.avg_lead_time': '平均前置时间',
	'insights.avg_cycle_time': '平均周期时间',
	'insights.total_projects': '项目数',
	'insights.team_members': '团队成员',
	'insights.members': '成员',

	// Distribution chart
	'insights.by_status': '按状态',
	'insights.by_status_type': '按状态类型',
	'insights.by_priority': '按优先级',

	// Burnup chart
	'insights.burnup': '燃尽图',
	'insights.no_burnup_data': '暂无燃尽数据',
	'insights.total_created': '累计创建',
	'insights.total_completed': '累计完成',
	'insights.scope': '范围',

	// Insights explorer
	'insights.measure': '度量',
	'insights.group_by': '分组依据',
	'insights.segment_by': '分段依据',
	'insights.date_range': '日期范围',
	'insights.total_label': '合计：',
	'insights.aggregate': '聚合：',
	'insights.no_data_points': '该度量尚无数据点',
	'insights.no_data': '暂无数据',
	'insights.group_column': '分组',
	'insights.count': '数量',
	'insights.p50': 'P50',
	'insights.p75': 'P75',
	'insights.p95': 'P95',
	'insights.issues_count': '议题（{count}）',
	'insights.issue': '议题',
	'insights.issue_title': '标题',
	'insights.value': '值',

	// Measure labels
	'insights.measure_issue_count': '议题数量',
	'insights.measure_issue_age': '议题年龄',
	'insights.measure_lead_time': '前置时间',
	'insights.measure_cycle_time': '周期时间',
	'insights.measure_triage_time': '分类时间',

	// Slice labels
	'insights.slice_none': '无',
	'insights.slice_status': '状态',
	'insights.slice_status_type': '状态类型',
	'insights.slice_priority': '优先级',
	'insights.slice_assignee': '指派人',
	'insights.slice_team': '团队',
	'insights.slice_project': '项目',
	'insights.slice_cycle': '周期',
	'insights.slice_label': '标签',
	'insights.slice_creator': '创建者',

	// Date range picker
	'insights.select_date_range': '选择日期范围',
	'insights.days_30': '30 天',
	'insights.days_90': '90 天',
	'insights.months_6': '6 个月',
	'insights.clear': '清除'
} as Record<string, string>;
