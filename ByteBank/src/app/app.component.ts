import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
  constructor(private service: TransferenciaService){}

  //método que recebe o Output(eventEmitter) do componente nova-transferencia
  transferir($event){
    this.service.adicionar($event);
  }
}
