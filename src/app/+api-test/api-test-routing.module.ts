import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiTestComponent } from './api-test.component';

const routes: Routes = [
  {
    path: '',
    component: ApiTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiTestRoutingModule { }
