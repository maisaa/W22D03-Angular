import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'CRUD';

  name: string = "Maisaa Alkhedr";
  NewTitle : string = "App new title 1";
  email: string = "maisaa.alkhedr@gmail.com"

}
