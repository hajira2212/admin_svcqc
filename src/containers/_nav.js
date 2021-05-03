import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },

 
    {
    _tag: 'CSidebarNavDropdown',
    name: 'Master Management',
    route: '/master',
    icon: 'cil-puzzle',
    _children: [
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Status',
        to: '/master/status',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Defects',
        to: '/master/defects',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User Management',
    route: '/user',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Company',
        to: '/user/company',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Wafers',
        to: '/user/wafers',
      },
    ],
  },

  {
      _tag: 'CSidebarNavDropdown',
      name: 'Settings',
      route: '/settings',
      icon: 'cil-settings',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Profile',
          to: '/settings/profile',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Change Password',
          to: '/setting/change password',
        },
        
      ]
    },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/notifications',
    icon: 'cil-spreadsheet',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Company Report',
        to: '/company/reports',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Wafers Report',
        to: '/wafers/reports',
      },
    ]
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Reports',
  //   route: '/notifications',
  //   icon: 'cil-spreadsheet',
  //   _children: [
  //     // {
  //     //   _tag: 'CSidebarNavItem',
  //     //   name: 'Alerts',
  //     //   to: '/notifications/alerts',
  //     // },
      
  //   ]
  // },

  
    
]

export default _nav
