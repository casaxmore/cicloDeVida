import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  nombre: string = 'casaXmore';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor(){
    // Antes de que el html esté construido
    console.log('contructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');
  }

  ngOnInit(): void {
    // Cuando ya está cargado el html y queremos hacer peticiones http, traer información de servicios
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe( i => {
      console.log(i);
      this.segundos = i;
    })
  }

  guardar() {
    console.log('Guardar');
  }

}
