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
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/403',
    component: './Error/403',
  },
  {
    path: '/500',
    component: './Error/500',
  },
  {
    name: 'form',
    icon: 'form',
    path: '/form',
    routes: [
      {
        name: 'basic-form',
        icon: 'smile',
        path: '/form/basic',
        component: './Form/Basic',
      },
      {
        name: 'step-form',
        icon: 'smile',
        path: '/form/step',
        component: './Form/Step',
      },
      {
        name: 'advanced-form',
        icon: 'smile',
        path: '/form/advanced',
        component: './Form/Advanced',
      },
    ],
  },
  {
    name: 'profile',
    icon: 'profile',
    path: '/profile',
    routes: [
      {
        name: 'basic',
        icon: 'smile',
        path: '/profile/basic',
        component: './Profile/Basic',
      },
      {
        name: 'advanced',
        icon: 'smile',
        path: '/profile/advanced',
        component: './Profile/Advanced',
      },
    ],
  },
  {
    name: 'list',
    icon: 'table',
    path: '/list',
    routes: [
      {
        name: 'basic-list',
        icon: 'smile',
        path: '/list/basic',
        component: './List/Basic',
      },
      {
        name: 'table-list',
        icon: 'table',
        path: '/list/table',
        component: './List/Table',
      },
    ],
  },
  {
    component: './Error/404',
  },
];
