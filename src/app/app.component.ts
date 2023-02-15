import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrar: boolean = true;
  /* accion: string = 'Ocultar'; */

 /*  mostrarBoton(){
    this.mostrar = !this.mostrar;
    if(this.mostrar !== true){
      this.accion = 'Mostrar'
    }else{
      this.accion = 'Ocultar'
    }
  } */
}
