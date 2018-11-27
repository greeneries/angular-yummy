import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './food/list/list.component';
import { DetailComponent } from './food/detail/detail.component';

const routes: Routes = [
  { path : '', redirectTo : 'food/list', pathMatch : 'full'},
  { path : 'food/list', component : ListComponent },
  { path : 'food/list/:page', component : ListComponent },
  { path : 'food/detail/:foodId', component : DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
