// este é nosso arquivo central de dependências
// da biblioteca Material
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// vamos construir nossos arrays de registro
@NgModule({
  imports: [MatTableModule, MatPaginatorModule],
  exports: [MatTableModule, MatPaginatorModule],
})
export class AngularMaterialModule {}
