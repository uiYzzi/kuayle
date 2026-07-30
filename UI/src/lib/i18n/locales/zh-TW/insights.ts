import type { TranslationKey } from '../en';

export const insights: Record<string, string> = {
	'insights.title': '洞察',
	'insights.team_scope': '團隊範圍',
	'insights.all_workspace_teams': '所有工作區團隊',
	'insights.workspace_overview': '工作區概覽',
	'insights.using_team_workflow': '使用該團隊的工作流程與成員',
	'insights.workflow_types_comparable': '狀態按工作流程類型跨團隊分組',
	'insights.overview': '概覽',
	'insights.explore': '探索',
	'insights.current_state': '當前狀態',
	'insights.current_state_desc': '該範圍內的即時議題與交付健康狀況',
	'insights.work_distribution': '工作分佈',
	'insights.using_custom_statuses': '使用 {team} 的自訂狀態',
	'insights.workflow_types_comparable_teams': '工作流程類型可在各團隊自訂狀態間比較',
	'insights.delivery_trend': '交付趨勢',
	'insights.delivery_trend_desc': '已建立的工作、已完成的工作以及剩餘範圍',
	'insights.burnup_interval': '燃盡間隔',
	'insights.daily': '每日',
	'insights.weekly': '每週',
	'insights.monthly': '每月',
	'insights.build_insight': '構建洞察',
	'insights.build_insight_desc': '選擇一個度量、分組和可選的對比維度',
	'insights.failed_load': '載入分析數據失敗',
	'insights.choose_date_range': '選擇一個日期範圍',
	'insights.failed_load_burnup': '載入燃盡圖失敗',

	// Overview cards
	'insights.total_issues': '議題總數',
	'insights.open_issues': '未關閉',
	'insights.completed_issues': '已完成',
	'insights.overdue_issues': '已逾期',
	'insights.started_issues': '已開始',
	'insights.unassigned_issues': '未指派',
	'insights.completion_rate': '完成率',
	'insights.avg_lead_time': '平均前置時間',
	'insights.avg_cycle_time': '平均週期時間',
	'insights.total_projects': '專案數',
	'insights.team_members': '團隊成員',
	'insights.members': '成員',

	// Distribution chart
	'insights.by_status': '按狀態',
	'insights.by_status_type': '按狀態類型',
	'insights.by_priority': '按優先級',

	// Burnup chart
	'insights.burnup': '燃盡圖',
	'insights.no_burnup_data': '暫無燃盡數據',
	'insights.total_created': '累計建立',
	'insights.total_completed': '累計完成',
	'insights.scope': '範圍',

	// Insights explorer
	'insights.measure': '度量',
	'insights.group_by': '分組依據',
	'insights.segment_by': '分段依據',
	'insights.date_range': '日期範圍',
	'insights.total_label': '合計：',
	'insights.aggregate': '聚合：',
	'insights.no_data_points': '該度量尚無數據點',
	'insights.no_data': '暫無數據',
	'insights.group_column': '分組',
	'insights.count': '數量',
	'insights.p50': 'P50',
	'insights.p75': 'P75',
	'insights.p95': 'P95',
	'insights.issues_count': '議題（{count}）',
	'insights.issue': '議題',
	'insights.issue_title': '標題',
	'insights.value': '值',

	// Measure labels
	'insights.measure_issue_count': '議題數量',
	'insights.measure_issue_age': '議題年齡',
	'insights.measure_lead_time': '前置時間',
	'insights.measure_cycle_time': '週期時間',
	'insights.measure_triage_time': '分類時間',

	// Slice labels
	'insights.slice_none': '無',
	'insights.slice_status': '狀態',
	'insights.slice_status_type': '狀態類型',
	'insights.slice_priority': '優先級',
	'insights.slice_assignee': '指派人',
	'insights.slice_team': '團隊',
	'insights.slice_project': '專案',
	'insights.slice_cycle': '週期',
	'insights.slice_label': '標籤',
	'insights.slice_creator': '建立者',

	// Date range picker
	'insights.select_date_range': '選擇日期範圍',
	'insights.days_30': '30 天',
	'insights.days_90': '90 天',
	'insights.months_6': '6 個月',
	'insights.clear': '清除'
} as Record<string, string>;
