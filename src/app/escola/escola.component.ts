import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salvar(): void {
    console.log("salvar");
  }

  listar(): void {
    console.log("listar");
  }

}
