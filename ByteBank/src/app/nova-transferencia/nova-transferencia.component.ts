import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../extrato/models/transferencia.model';
import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService){}

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionar(valorEmitir)
      .subscribe((transferencia) => {
        console.log(transferencia);
        this.limparCampos();
      },
      error => console.log(error))
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
