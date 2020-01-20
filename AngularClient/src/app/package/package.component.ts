import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';
import { FunctionlityService } from '../functionlity.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  data;
  cities: Object;
  constructor(private router: Router, private service: PackageService, private service1: FunctionlityService) { }


  Add_package(NewPackage: any) {
    //console.log(NewPackage);
    let data = this.service.Add_package(NewPackage);
    data.subscribe((result ) => {
      console.log(result);
      if(result != null)
      {
        sessionStorage['packageId'] = result;
        this.router.navigate(['planner']);
      }
   });

  }

  ngOnInit() {
    this.service1.getCities().subscribe((res) => {
      this.cities = res;
      console.log(this.cities);
    })
  }

}