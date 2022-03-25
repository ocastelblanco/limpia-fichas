import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ConvertirComponent } from './convertir/convertir.component';
import { CompararComponent } from './comparar/comparar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConvertirComponent,
    CompararComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
