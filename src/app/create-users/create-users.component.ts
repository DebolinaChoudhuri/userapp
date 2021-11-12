import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  users: Users = new Users();

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.usersService.createUsers(this.users).subscribe( data =>{
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList(){
    this.router.navigate(['/users']);
  }
  
  onSubmit(){
    console.log(this.users);
    this.saveEmployee();
  }
}
