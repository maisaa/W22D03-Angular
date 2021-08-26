import { Component, Input, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() name: String="";
  @Input() newTitle: String="";

  
  

  constructor() { }

  ngOnInit(): void {
  }

  


}
