import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertirComponent } from './convertir/convertir.component';
import { CompararComponent } from './comparar/comparar.component';

const routes: Routes = [
  { path: '', redirectTo: '/convertir', pathMatch: 'full' },
  { path: 'convertir', component: ConvertirComponent },
  { path: 'comparar', component: CompararComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
