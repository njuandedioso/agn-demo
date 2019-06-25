import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './comp-a.compenent.html',
  styleUrls: ['./comp-a.compenent.css']
})
export class compAComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  }
  //variable
  nombre: string;
  apodo:string;
  lista: string[] = [];

  recepcionarValor(e : any){
    this.nombre=e.target.value;
  }

  agregar(){
    this.lista.push(this.apodo);
  }

}
