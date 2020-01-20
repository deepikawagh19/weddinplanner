import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emService: any;

  constructor(private userService:UserService,
    private router:Router) { }

    login(loginForm)
    {
      let data = loginForm.form.value;
   //   alert(data.email);
     this.userService.login(data).subscribe(res=>{
      sessionStorage['email']=res['email'];
      if(res['role']=='ADMIN')
      {
        this.router.navigate(['adminHome']);

      }else if(res['role']=='USER')
      {
        this.router.navigate(['home']);


      }else if(res['role']=='PLANNER')
      {
        this.router.navigate(['planner']);
      }
      
  
     },(err)=>{
  
      alert("Something went wrong");
     })
    }

  ngOnInit() {
  }

}