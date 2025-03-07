import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Hola Mundo Angular desde Componenete!';
  public users: string[] = ['Juan', 'Pedro', 'Maria', 'Ana'];
  private age: number = 30;
  visible: boolean = false;
  
  public setVisible(visible: boolean): void {
    this.visible = visible;
    ////Con un operador ternario y no recibiendo parametro quedaria asi 
    //this.visible =  this.visible ? false : true;  
    console.log('Hemos hecho click en setVisible');
    console.log('Visible: ', this.visible);
  }
  
}
