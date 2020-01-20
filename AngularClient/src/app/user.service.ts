import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmtrService } from './emtr.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }
  login(user)
  {
    return this.http.post("http://localhost:8080/WeddingPlannerSystem/user/login",user);
  }
  register(user){

    return this.http.post("http://localhost:8080/WeddingPlannerSystem/user/register",user);

  }
 
}








/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  register(user){

    return this.http.post("http://localhost:8080/WeddingPlannerSystem/user/register",user);

  }

  login(user)
  {
    return this.http.post("http://localhost:8080/WeddingPlannerSystem/user/login",user);
  }

}*/