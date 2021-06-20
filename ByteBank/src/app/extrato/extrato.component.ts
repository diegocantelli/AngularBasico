import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // irá virar uma propriedade do componente de extrato
  @Input('transferencia') transferencia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
