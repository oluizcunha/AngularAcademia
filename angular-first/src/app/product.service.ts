import { Produto } from './product';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('ProductService foi construido');
  }

  public getProdutos() {
    this.loggerService.log('metodo getProdutos foi chamado!');

    let produtos: Produto[];

    produtos = [
      new Produto(1, 'Quadro Mestre Yoda', 199),
      new Produto(2, 'Mascara Darth Vader', 159),
      new Produto(3, 'Lightsaber', 89),
    ];
    this.loggerService.log(produtos);
    return produtos;
  }
}
