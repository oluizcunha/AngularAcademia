import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-filho-um',
  templateUrl: './filho-um.component.html',
  styleUrls: ['./filho-um.component.css'],
  providers: [],
})
export class FilhoUmComponent {
  valorCompartilhado;

  constructor(private sharedService: SharedService) {
    this.valorCompartilhado = sharedService.obterValorCompartilhado();
    console.log('Componente filho-um ' + this.valorCompartilhado.toString());
  }
}
