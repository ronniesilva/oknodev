import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { ManagerComponent } from './manager/manager.component';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    ManagerComponent,
    TerminalComponent
  ],
  exports: [
    HomeComponent,
    ManagerComponent,
    TerminalComponent
  ]
})
export class PagesModule { }
