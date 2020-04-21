import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'ventas', loadChildren: './ventas/ventas.module#VentasModule'},
  { path: 'reservacion', loadChildren: './reservacion/reservacion.module#ReservacionModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
