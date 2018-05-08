import { Component, OnInit } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

import { CompaniesService } from './../../providers/companies.service';
import { Company } from './../../interfaces/company';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  company: string;

  constructor(
    public companiesService: CompaniesService
  ) { }

  ngOnInit() {
  }

  companyAdd() {
    const company: Company = {
      'name': this.company
    };

    // verifica se a empresa existe
    this.companiesService.checkCompanyDoc(company.name)
      .then(achou => {
        if (!achou) {

          // Cadastra a empresa
          this.companiesService.addCompanyId(company)
            .then(doc => {
              console.log('Cadastrado com sucesso:');
            })
            .catch(err => {
              console.log('[ERRO]:' + err);
            });

        } else {
          console.log('Esta empresa já existe');
        }
      })
      .catch(err => console.log('ERROR' + err));
  }

}
