import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTestComponent } from './api-test.component';
import { ApiTestRoutingModule } from './api-test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApiTestRoutingModule
  ],
  declarations: [ApiTestComponent]
})
export class ApiTestModule { }
