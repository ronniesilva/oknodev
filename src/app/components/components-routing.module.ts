import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const componentsRoutes: Routes = [
  // { path: 'xxx', component: CompanyAddComponent }
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
