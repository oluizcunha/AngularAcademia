import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first';

  public x: number=10;
  public umArray: Array<number> = [10,22,14];
  public dataHoje: Date = new Date();
  public statusBooleano: boolean = true;

  public nome: string = '';

  public exibirTexto(): string{
    return 'Retornando string'
  }

  public showAlert():void{
    console.log("tu apertou o botao..")
    alert('Evento de click')
  }

  public texto: string = 'este é o texto da caixa de dialogo alert';

}
