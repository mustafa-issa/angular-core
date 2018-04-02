import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTestComponent } from './api-test.component';
import { ApiTestRoutingModule } from './api-test-routing.module';
import { ApiTestService } from './api-test.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ApiTestRoutingModule,
    HttpModule
  ],
  declarations: [ApiTestComponent],
  providers:[ApiTestService]
})
export class ApiTestModule { }
