import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-pai-dois',
  templateUrl: './pai-dois.component.html',
  styleUrls: ['./pai-dois.component.css'],
  providers: [SharedService],
})
export class PaiDoisComponent {
  valorCompartilhado;
  constructor(private sharedService: SharedService) {
    this.valorCompartilhado = sharedService.obterValorCompartilhado();
    console.log('Componente pai-dois ' + this.valorCompartilhado.toString());
  }
}
