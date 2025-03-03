import { RouteObject } from 'react-router-dom';
import CoreHRLayout from '../../components/layouts/hris/core-hr/CoreHRLayout';

import DashboardView from '../../views/hris/core-hr/DashboardView';
import EmployeeManagementView from '../../views/hris/core-hr/EmployeeManagementView';
import UserAccessRolesView from '../../views/hris/core-hr/UsersAccessRolesView';

const coreHRRoutes: RouteObject[] = [
  {
    path: 'core-hr',
    element: <CoreHRLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardView />,
        id: "dashboard"
      },
      {
        path: 'employee-management',
        element: <EmployeeManagementView />,
        id: "employee_management"
      },
      {
        path: 'user-access-roles',
        element: <UserAccessRolesView />,
        id: "user_access_roles",
      },
    ]
  },
];

export default coreHRRoutes;
