import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FunctionlityService } from './functionlity.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  
  

  constructor(private http:HttpClient) {
   
   }
  

Add_package(data:any)
  {
    console.log("in service");
    console.log(data);
    return this.http.post("http://localhost:8080/WeddingPlannerSystem/planner/package",data);
  }
}