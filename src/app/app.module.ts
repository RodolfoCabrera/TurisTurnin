import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import { ReservacionModule } from './reservacion/reservacion.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VentasModule,
    AppRoutingModule,
    ReservacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
