import { Component } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

import { CompaniesService } from './../../providers/companies.service';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {

  constructor(
    public companiesService: CompaniesService
  ) { }

}
