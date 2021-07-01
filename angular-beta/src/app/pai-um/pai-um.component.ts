import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-pai-um',
  templateUrl: './pai-um.component.html',
  styleUrls: ['./pai-um.component.css'],
  providers: [SharedService],
})
export class PaiUmComponent {
  valorCompartilhado;
  constructor(private sharedService: SharedService) {
    this.valorCompartilhado = sharedService.obterValorCompartilhado();
    console.log('Componente pai-um ' + this.valorCompartilhado.toString());
  }
}
