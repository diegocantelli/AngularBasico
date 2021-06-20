import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
  transferencias: any[] = [];

  //método que recebe o Output(eventEmitter) do componente nova-transferencia
  transferir($event){
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
