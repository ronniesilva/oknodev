import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TerminalComponent } from './terminal/terminal.component';
import { ManagerComponent } from './manager/manager.component';

const pagesRoutes: Routes = [
  { path: 'manager', component: ManagerComponent },
  { path: 'terminal', component: TerminalComponent }
  // { path: 'signin', component: SigninComponent }
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
