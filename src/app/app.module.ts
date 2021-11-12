import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule } from '@angular/forms';
import { UpdateUsersComponent } from './update-users/update-users.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CreateUsersComponent,
    UpdateUsersComponent
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
