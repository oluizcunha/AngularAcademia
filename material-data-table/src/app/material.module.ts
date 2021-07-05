// este é nosso arquivo central de dependências
// da biblioteca Material
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// vamos construir nossos arrays de registro
@NgModule({
  imports: [MatTableModule],
  exports: [MatTableModule],
})
export class AngularMaterialModule {}
