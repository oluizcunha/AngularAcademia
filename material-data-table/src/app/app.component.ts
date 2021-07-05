import { Component, ViewChild } from '@angular/core';
// vamos importar nossa dependência da lib material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-data-table';
  // vamos implementar o array para exibirmos as colunas
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  // nossa fonte de dados
  dataSource = new MatTableDataSource<AlgunsElementosTab>(ELEMENT_DATA);
  // vamos criar nossa ViewChild
  @ViewChild(MatPaginator, { static: true }) 'paginator': MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
// ESTA É A NOSSA FONTE DE DADOS DEVIDAMENTE CONSTRUIDA
// estes dados são estáticos
// este é o nosso model data
export interface AlgunsElementosTab {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}
// este é nosso conjunto de dados
const ELEMENT_DATA: AlgunsElementosTab[] = [
  { position: 1, name: 'Hidrogênio', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Hélio', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lítio', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Berílio', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boro', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbono', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogênio', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxigênio', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluor', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neônio', weight: 20.1797, symbol: 'Ne' },
  { position: 10, name: 'Hidrogênio', weight: 1.0079, symbol: 'H' },
  { position: 20, name: 'Hélio', weight: 4.0026, symbol: 'He' },
  { position: 30, name: 'Lítio', weight: 6.941, symbol: 'Li' },
  { position: 40, name: 'Berílio', weight: 9.0122, symbol: 'Be' },
  { position: 50, name: 'Boro', weight: 10.811, symbol: 'B' },
  { position: 60, name: 'Carbono', weight: 12.0107, symbol: 'C' },
  { position: 70, name: 'Nitrogênio', weight: 14.0067, symbol: 'N' },
  { position: 80, name: 'Oxigênio', weight: 15.9994, symbol: 'O' },
  { position: 90, name: 'Fluor', weight: 18.9984, symbol: 'F' },
  { position: 100, name: 'Neônio', weight: 20.1797, symbol: 'Ne' },
];
