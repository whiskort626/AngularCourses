import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Hola Mundo Angular desde Componenete!';
  public subTitle: string = 'Contador con estado de SessionStorage';
  public users: string[] = ['Juan', 'Pedro', 'Maria', 'Ana'];
  private age: number = 30;
  visible: boolean = false;
  counter!: number;

  ngOnInit(): void {
    this.counter = (sessionStorage.getItem('counter')) != undefined ? 
    parseInt(sessionStorage.getItem('counter')!) : 
    0;
  }
  
  public setVisible(visible: boolean): void {
    this.visible = visible;
    ////Con un operador ternario y no recibiendo parametro quedaria asi 
    //this.visible =  this.visible ? false : true;  
    console.log('Hemos hecho click en setVisible');
    console.log('Visible: ', this.visible);
  }

  setCounter(event: number): void {
    this.counter = event;
  }
  
}
