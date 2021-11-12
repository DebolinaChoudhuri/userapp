import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent} from './update-users/update-users.component';
const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'create-users', component: CreateUsersComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-users/:id', component: UpdateUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
