import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { NomedocomponentComponent } from './nomedocomponent/nomedocomponent.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    AlterarTextoDirective,
    NomedocomponentComponent,
    ComponenteFilhoComponent,
    // HomeComponent,
    // FaleConoscoComponent,
    RoutingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
