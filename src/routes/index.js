import React from 'react';
import Layout from '../components/Layout';

const Dashboard = React.lazy(() => import('../components/Page/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;
