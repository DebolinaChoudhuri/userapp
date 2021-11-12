import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-update-users',
    templateUrl: './update-users.component.html',
    styleUrls: ['./update-users.component.css']
   })
export class UpdateUsersComponent implements OnInit {

  id!: number;
  users: Users = new Users();

  constructor(private usersService: UsersService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.usersService.getUsersById(this.id).subscribe(data => {
      this.users = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.usersService.updateUsers(this.id, this.users).subscribe( data =>{
      this.goToUsersList();
    }, (error: any) => console.log(error));
  }
  goToUsersList(){
    this.router.navigate(['/users']);
  }


  } 



