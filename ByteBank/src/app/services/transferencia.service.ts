import { AppModule } from './../app.module';
import { Injectable } from '@angular/core';

// @Injectable -> indica que uma instância desta classe poderá ser injetada no construtor de outras classes
@Injectable({
  // providedIn: 'root' -> indica que esta classe estará disponível em toda a aplicação
  // é possível especificar o módulo em que ela estará disponível, através da sintaxe:
  // providedIn: AppModule
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}