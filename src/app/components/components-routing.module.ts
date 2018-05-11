import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ManagerPanelComponent } from './manager-panel/manager-panel.component';
import { TerminalRatingComponent } from './terminal-rating/terminal-rating.component';

const componentsRoutes: Routes = [
  { path: 'managerpanel', component: ManagerPanelComponent },
  { path: 'rating/:id', component: TerminalRatingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
