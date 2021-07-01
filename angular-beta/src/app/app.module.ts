import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiUmComponent } from './pai-um/pai-um.component';
import { FilhoUmComponent } from './filho-um/filho-um.component';
import { FilhoDoisComponent } from './filho-dois/filho-dois.component';
import { PaiDoisComponent } from './pai-dois/pai-dois.component';
import { FilhoTresComponent } from './filho-tres/filho-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiUmComponent,
    FilhoUmComponent,
    FilhoDoisComponent,
    PaiDoisComponent,
    FilhoTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
