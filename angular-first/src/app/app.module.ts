import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { AlterarTextoDirective } from './alterar-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    AlterarTextoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
