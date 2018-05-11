import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CompanyAddComponent } from './company-add/company-add.component';
import { TerminalLoginComponent } from './terminal-login/terminal-login.component';
import { TerminalRatingComponent } from './terminal-rating/terminal-rating.component';

const componentsRoutes: Routes = [
  { path: 'companyadd', component: CompanyAddComponent },
  { path: 'terminallogin', component: TerminalLoginComponent },
  { path: 'rating/:id', component: TerminalRatingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
