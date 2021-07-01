import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-filho-tres',
  templateUrl: './filho-tres.component.html',
  styleUrls: ['./filho-tres.component.css'],
  providers: [],
})
export class FilhoTresComponent {
  valorCompartilhado;
  constructor(private sharedService: SharedService) {
    this.valorCompartilhado = sharedService.obterValorCompartilhado();
    console.log('Componente filho-tres ' + this.valorCompartilhado.toString());
  }
}
