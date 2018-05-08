import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { CompanyAddComponent } from './company-add/company-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // routing
    ComponentsRoutingModule
  ],
  declarations: [
    CompanyAddComponent
  ],
  exports: [
    CompanyAddComponent
  ]
})
export class ComponentsModule { }
