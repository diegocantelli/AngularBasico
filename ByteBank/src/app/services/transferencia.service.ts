import { Transferencia } from './../extrato/models/transferencia.model';
import { AppModule } from './../app.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable -> indica que uma instância desta classe poderá ser injetada no construtor de outras classes
@Injectable({
  // providedIn: 'root' -> indica que esta classe estará disponível em toda a aplicação
  // é possível especificar o módulo em que ela estará disponível, através da sintaxe:
  // providedIn: AppModule
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
