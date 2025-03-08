import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent  implements OnInit{
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmiter: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(): void {
    //this.counter = parseInt(sessionStorage.getItem('counter') || '0');
    this.counter = (sessionStorage.getItem('counter')) != undefined ? 
    parseInt(sessionStorage.getItem('counter')!) : 
    0;

    console.log('CounterComponent ngOnInit');
    console.log('Counter: ', this.counter);
    console.log('Titulo: ', this.title);
  }

  increment(): void {
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmmiter.emit(parseInt(sessionStorage.getItem('counter')!)); 
  }

  get getCounter(): number {
    return this.counter;
  }

  set setCounter(value: number) {
    this.counter = value;
  }
}
