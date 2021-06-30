import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
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

  algarismo: number = 0;

  cssAlteradoViaVar: string = 'color size';
  umaClasseCss: UmaClasseCss = new UmaClasseCss();

  tamanho: number = 12;
  color: string = '#380F6C';
  estiloClasse: EstiloClasse = new EstiloClasse();

  exibirFilho: boolean = false;

  constructor() {
    console.log('AppComponent:Constructor');
  }
  toggle() {
    this.exibirFilho = !this.exibirFilho;
  }
  ngOnChanges() {
    console.log('AppComponent:OnChanges');
  }
  ngOnInit() {
    console.log('AppComponent:OnInit');
  }
  ngDoCheck() {
    console.log('AppComponent:DoCheck');
  }
  ngAfterContentInit() {
    console.log('AppComponent:AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AppComponent:AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AppComponent:AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AppComponent:AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }

  umJson = {
    nome: 'Dexter',
    idade: '8',
    endereco: { rua: 'Rua da Casinha', numero: '01' },
  };
  mesesAno = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
}

class Filme {
  titulo!: string;
  direcao!: string;
  elenco!: string;
  anoLancamento!: string;
}

// criando uma nova classe fora da classe principal
class UmaClasseCss {
  color: boolean = true;
  size: boolean = true;
}

class EstiloClasse {
  color: string = '#FF5733';
  'font-size.%': number = 150;
  'font-weight': string = 'bold';
}
