import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  user!: Users[];
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
    
    private getUsers(){
      this.usersService.getUsersList().subscribe(data => {this.user = data;});

  }

  updateUsers(id: number){
    this.router.navigate(['update-users', id]);
  }

  deleteUsers(id: number){
    this.usersService.deleteUsers(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }


}
