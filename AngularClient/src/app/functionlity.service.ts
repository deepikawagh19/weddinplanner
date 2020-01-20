import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionlityService {

  constructor(private http:HttpClient) { }
  search(city:any)
  {
    console.log("in service");
    console.log(city);
    return this.http.post("http://localhost:8080/WeddingPlannerSystem/user/searchpkg",city);
  }

  getCities()
  {
    return this.http.get("http://localhost:8080/WeddingPlannerSystem/user/getcities");
  }
  
}