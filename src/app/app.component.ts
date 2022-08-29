import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conectarAPI';
// tipos de variabe:
//var: variable global
//let: variable de metodo
//const: constante 
  public accion(s:string){
    console.log(s); 
  }
}
