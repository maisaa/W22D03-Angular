import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: string[]=['eat','code','sleep']

  constructor() { }

  ngOnInit(): void {
  }

  showTodo(todos:string):void{
    
  }

}
