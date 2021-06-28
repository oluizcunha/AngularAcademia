import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
  @Input() public mensagem: string ='';
  @Input('alert') public outraMensagem: string = '';

  public exibirAlert(): void{
    alert(this.outraMensagem)
  }

}
