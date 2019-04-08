import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component'

const routes: Routes = [
  {
    path: "userlist",
    component: UserListComponent,
  },
  {
    path: "user/:id",
    component: UserComponent
  },
  { path: '', redirectTo: '/userlist', pathMatch: 'full' },
  { path: '**', redirectTo: '/userlist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
