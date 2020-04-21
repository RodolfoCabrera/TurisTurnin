import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsientosComponent} from './asientos/asientos.component';
const routes: Routes = [
  { path: 'asientos', component: AsientosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservacionRoutingModule { }
