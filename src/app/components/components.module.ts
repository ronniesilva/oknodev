import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { CompanyAddComponent } from './company-add/company-add.component';
import { TerminalLoginComponent } from './terminal-login/terminal-login.component';
import { TerminalRatingComponent } from './terminal-rating/terminal-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // routing
    ComponentsRoutingModule
  ],
  declarations: [
    CompanyAddComponent,
    TerminalLoginComponent,
    TerminalRatingComponent
  ],
  exports: [
    CompanyAddComponent,
    TerminalLoginComponent,
    TerminalRatingComponent
  ]
})
export class ComponentsModule { }
