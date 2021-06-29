import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-first';

  public x: number = 10;
  public umArray: Array<number> = [10, 22, 14];
  public dataHoje: Date = new Date();
  public statusBooleano: boolean = true;

  public nome: string = '';

  public exibirTexto(): string {
    return 'Retornando string';
  }

  public showAlert(): void {
    console.log('tu apertou o botao..');
    alert('Evento de click');
  }

  public texto: string = 'este é o texto da caixa de dialogo alert';

  //implementado função de exibição de dados de saida(Output)
  public exibirDados(data: any) {
    let strMessage: string = 'Obrigado por se cadastrar ' + data.nome + '.';

    strMessage += 'o email ' + data.email + 'foi cadastrado com sucesso!';

    alert(strMessage);
  }

  subtitulo: string = '5 filmes bons';

  filmes: Filme[] = [
    {
      titulo: 'O poderoso Chefão',
      direcao: 'Francis Ford Coppola',
      elenco: 'Marlon Brando, Al Pacino, James Caan',
      anoLancamento: '10 de setembro, 1972',
    },
    {
      titulo: 'Um Estranho no Ninho',
      direcao: 'Milos Forman',
      elenco: 'Jack Nicholson, Louise Fletcher, Michael Berryman ',
      anoLancamento: '26 de maio, 1976',
    },
    {
      titulo: 'A lista de Schindler',
      direcao: 'Steven Spielberg',
      elenco: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
      anoLancamento: '11 de março, 1993',
    },
    {
      titulo: 'Forrest Gump - O contador de histórias',
      direcao: 'Robert Zemeckis',
      elenco: 'Tom Hanks, Robin Wright, Gary Sinise',
      anoLancamento: '7 de dezembro, 1994',
    },
    {
      titulo: 'Laranja Mecânica',
      direcao: 'Stanley Kubrik',
      elenco: 'Malcolm McDowell, Patrick Magee, Michael Bates ',
      anoLancamento: '04 de setembro, 1971',
    },
  ];

  //Auxiliador do array, para facilitar a interação
  CompositeKey(index: any, item: any) {
    return item.titulo + item.direcao;
  }
}

class Filme {
  titulo!: string;
  direcao!: string;
  elenco!: string;
  anoLancamento!: string;
}
