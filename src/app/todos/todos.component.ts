import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  homeName: string = "TodoList App";
  todos: string[] = ["eat","code","sleep"];
  todo: string ="";
  newtodo: string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(i:number, todo: string): void {
    this.todos[i] = todo;
  }

  showTodo(i:number): void{
    console.log(`Todo: ${this.todos[i]}`)
  }

  addTodo(todo: string): void{
    this.todos.push(todo);
  }

  updateTodo(i:number, todo: string):void{
    this.todos[i]=todo;
  }
  
  deleteTodo(todo: string): void{
    let i = this.todos.indexOf(todo);
    this.todos.splice(i,1);
  }

}
