import { Injectable } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmtrService {
  fire: any;

  constructor() { }
  logInBtnSwitch(value) {
    this.fire.emit(value);
  }
  
  

  getEmittedValueForLogbtnSwitch() {
    return this.fire;
  }
}