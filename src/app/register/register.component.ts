
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

/*export class CreateUsersComponent implements OnInit {
    
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
  
  /*onSubmit(){
    console.log(this.users);
    this.saveEmployee();
  }*/





export class RegisterComponent implements OnInit {

  users1: Users = new Users();
  
  constructor( private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(item:any){
    console.warn(item);
    alert("Registered successfully!"); 
    this.router.navigate(['/main']);    
  }
 
  saveEmployee(){
    this.usersService.createUsers1(this.users1).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  AddUser(){
   // this.CreateUsersComponent.users.saveEmployee();
  }

}
  
