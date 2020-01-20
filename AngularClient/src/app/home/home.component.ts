import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionlityService } from '../functionlity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data;
cities:any=[];
show=true;
show1=false;
  userService: any;

  constructor(private service:FunctionlityService,private router:Router) { 

    if(sessionStorage['email']==undefined)
    {
      //this.router.navigate(['login']);
    }
  }
    search(myForm)
    {

     console.log(myForm.form.value);
  this.data=myForm.form.value;
      this.service.search(this.data).subscribe((res)=>{
  console.log(res)
  this.data=res;
  this.show1=true;

  this.show=false;
  sessionStorage['cityName']=res;

      this.router.navigate(['home']);
    

      })
    }
   
    ngOnInit()
    {
      this.service.getCities().subscribe((res)=>{
        this.cities=res;
        console.log(this.cities);
      });
    }
    
  }