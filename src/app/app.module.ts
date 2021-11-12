import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule } from '@angular/forms';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarBlankComponent } from './nav-bar-blank/nav-bar-blank.component';
import { NavBarSignOutComponent } from './nav-bar-sign-out/nav-bar-sign-out.component';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CreateUsersComponent,
    UpdateUsersComponent,
    RegisterComponent,
    MainComponent,
    NavBarComponent,
    AboutusComponent,
    FooterComponent,
    NavBarBlankComponent,
    NavBarSignOutComponent,
    LoginComponent,
    LoginHomeComponent,
    LoginAdminComponent,
    NavBarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
