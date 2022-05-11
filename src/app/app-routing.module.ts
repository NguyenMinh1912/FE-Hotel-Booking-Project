import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      layout: 'protected'
    },
    children: [
      {
        path: 'room',
        loadChildren: () =>
          import('./admin/pages/room/room.module').then(
            (m) => m.RoomModule
          ),
      },
    ],
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   component: LayoutComponent,
  //   data: {
  //     layout: 'protected',
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./modules/protected/dashboard/dashboard.module').then(
  //           (m) => m.DashboardModule
  //         ),
  //     },
  //     {
  //       path: 'staffs',
  //       loadChildren: () =>
  //         import('./modules/protected/staff/staff.module').then(
  //           (m) => m.StaffModule
  //         ),
  //     },
  //     {
  //       path: 'projects',
  //       loadChildren: () =>
  //         import('./modules/protected/project/project.module').then(
  //           (m) => m.ProjectModule
  //         ),
  //     },
  //     {
  //       path: 'claim',
  //       loadChildren: () =>
  //         import('./modules/protected/claim/claim.module').then(
  //           (m) => m.ClaimModule
  //         ),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
