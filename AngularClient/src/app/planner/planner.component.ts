import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionlityService } from '../functionlity.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  cities: any;

  constructor(private service:FunctionlityService,
    private router:Router) { }

    ngOnInit()
    {
      this.service.getCities().subscribe((res)=>{
        this.cities=res;
        console.log(this.cities);
      })
    }

}
