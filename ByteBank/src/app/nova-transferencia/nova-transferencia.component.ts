import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../extrato/models/transferencia.model';
import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  valor: number;
  destino: number;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router){}

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitir)
      .subscribe((transferencia) => {
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      error => console.log(error))
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
