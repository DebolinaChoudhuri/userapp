import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent} from './update-users/update-users.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent},
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'create-users', component: CreateUsersComponent},
 // {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'update-users/:id', component: UpdateUsersComponent},
  {path: 'registerusers' , component: RegisterComponent},
  {path: 'login-admin', component: LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
