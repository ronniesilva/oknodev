import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyAddComponent } from './../components/company-add/company-add.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalLoginComponent } from './../components/terminal-login/terminal-login.component';

const pagesRoutes: Routes = [
  {
    path: 'manager', component: ManagerComponent, children: [
      { path: 'companyadd', component: CompanyAddComponent }
    ]
  },
  {
    path: 'terminal', component: TerminalComponent, children: [
      { path: '', component: TerminalLoginComponent }
    ]
  },
  { path: 'logout', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
