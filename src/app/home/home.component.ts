import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() name: String="";
  @Input() newTitle: String="";

  homeName: string = "home name";
  todos: string[] = ["todo 1","todo 2","todo 3"];
  email: string ="nnnnn";

  constructor() { }

  ngOnInit(): void {
  }

  showTodo(todo: string): void{
    console.log(`Todo: ${todo}`)
  }

}
