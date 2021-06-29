import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlterarTexto]',
})
export class AlterarTextoDirective {
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText =
      'esse é um texto inserido a partir da diretiva de componente ou diretiva customizada';
  }
}
