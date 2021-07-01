import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-filho-dois',
  templateUrl: './filho-dois.component.html',
  styleUrls: ['./filho-dois.component.css'],
  providers: [],
})
export class FilhoDoisComponent {
  valorCompartilhado;
  constructor(private sharedService: SharedService) {
    this.valorCompartilhado = sharedService.obterValorCompartilhado();
    console.log('Componente filho-dois ' + this.valorCompartilhado.toString());
  }
}
