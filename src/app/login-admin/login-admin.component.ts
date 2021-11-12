import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(item:any){
    if(item.userName=='admin123' && item.password=='passWORD@12'){
      alert("Login OK!");
      this.router.navigate(['/users']);
    }
    else{
      
      alert("Enter valid credentials");
      this.router.navigate(['/login-admin']);
      
    }
  }

}
