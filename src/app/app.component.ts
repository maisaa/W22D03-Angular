import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'CRUD';

  NewTitle : string = "CRUD TodoList App";
  name: string = "Maisaa Alkhder";
  email: string = "maisaa.alkhedr@gmail.com"

}
