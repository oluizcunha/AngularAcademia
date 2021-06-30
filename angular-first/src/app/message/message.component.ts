import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  //Entrada
  @Input() public mensagem: string = '';
  @Input('alert') public outraMensagem: string = '';

  public exibirAlert(): void {
    alert(this.outraMensagem);
  }

  //Saida
  @Output() exibirDados = new EventEmitter<any>();

  public data: any = {};

  public enviarDados(): void {
    //popular o objeto data
    this.exibirDados.emit(this.data);
    console.log(this.data);
  }
}
