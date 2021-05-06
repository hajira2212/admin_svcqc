import React from 'react';

// Dashboard Page
const Dashboard = React.lazy(() => import('./views/dashboard'));

// Master pages
const Status_Master = React.lazy(() => import('./views/status'));
const Defects_Master = React.lazy(() => import('./views/defects'));

// Admin Pages
const Company  = React.lazy(() => import('./views/company'));
const Wafers = React.lazy(() => import('./views/wafers'));

// Setting pages
const Profile = React.lazy(() => import('./views/profile'));
// const Change_Password = React.lazy(() => import('./views/changePassword'));

// Reports pages
const CompanyReports = React.lazy(() => import('./Reports/companyList'));
const WafersReports = React.lazy(() => import('./Reports/wafersList'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }, 
 
  // master pages
  { path: '/master/defects', name: 'Master Management / Defects', component: Defects_Master }, 
  { path: '/master/status', name: 'Master Management / Status', component: Status_Master }, 

  // user pages
  { path: '/user/company', name: 'User Management / Company', component: Company }, 
  { path: '/user/wafers', name: 'User Management / Wafers', component: Wafers }, 

  // setting pages
  { path: '/settings/profile', name: 'settings / Profile', component: Profile }, 

  // reports
  { path: '/reports/company', name: 'Reports / company List', component: CompanyReports }, 
  { path: '/reports/wafers', name: 'Reports / wafers List', component: WafersReports }, 

 
   
];

export default routes;
