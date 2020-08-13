export default [
	{
		path: '/user',
		layout: false,
		routes: [
			{
				name: 'login',
				path: '/user/login',
				component: './user/login',
			},
		],
	},
	{
		path: '/welcome',
		name: 'welcome',
		icon: 'smile',
		component: './Welcome',
	},
	{
		name: 'account',
		icon: 'user',
		path: '/account',
		routes: [
			{
				name: 'center',
				icon: 'smile',
				path: '/account/center',
				component: './Account/Center',
			},
			{
				name: 'settings',
				icon: 'smile',
				path: '/account/settings',
				component: './Account/Settings',
			},
		],
	},
	{
		name: 'dashboard',
		icon: 'dashboard',
		path: '/dashboard',
		routes: [
			{
				name: 'analysis',
				icon: 'smile',
				path: '/dashboard/analysis',
				component: './Dashboard/Analysis',
			},
			{
				name: 'monitor',
				icon: 'smile',
				path: '/dashboard/monitor',
				component: './Dashboard/Monitor',
			},
			{
				name: 'workplace',
				icon: 'smile',
				path: '/dashboard/workplace',
				component: './Dashboard/Workplace',
			},
		],
	},
	{
		name: 'editor',
		icon: 'branches',
		path: '/editor',
		routes: [
			{
				name: 'flow',
				icon: 'smile',
				path: '/editor/flow',
				component: './Editor/Flow',
			},
			{
				name: 'koni',
				icon: 'smile',
				path: '/editor/koni',
				component: './Editor/Koni',
			},
			{
				name: 'mind',
				icon: 'smile',
				path: '/editor/mind',
				component: './Editor/Mind',
			},
		],
	},
	{
		path: '/admin',
		name: 'admin',
		icon: 'crown',
		access: 'canAdmin',
		component: './Admin',
		routes: [
			{
				path: '/admin/sub-page',
				name: 'sub-page',
				icon: 'smile',
				component: './Welcome',
			},
		],
	},
	{
		name: 'list.table-list',
		icon: 'table',
		path: '/list',
		component: './ListTableList',
	},
	{
		path: '/',
		redirect: '/welcome',
	},
	{
		path: '/403',
		component: './Errors/403',
	},
	{
		path: '/500',
		component: './Errors/500',
	},
	{
		component: './Errors/404',
	},
];
