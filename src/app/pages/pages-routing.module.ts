import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { TerminalComponent } from './terminal/terminal.component';

const pagesRoutes: Routes = [
  { path: 'manager', component: ManagerComponent },
  { path: 'terminal', component: TerminalComponent },
  { path: 'logout', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
