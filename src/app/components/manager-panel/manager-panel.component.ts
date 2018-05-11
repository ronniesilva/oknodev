import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CompaniesService } from './../../providers/companies.service';
import { UsersService } from './../../providers/users.service';
import { User } from './../../interfaces/user';

@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styleUrls: ['./manager-panel.component.scss']
})
export class ManagerPanelComponent implements OnInit {

  userUid = 'Om8jvAvm6GWhhDP3qZFQW6NokQQ2';
  currentUser: User;
  myCompanies$: Observable<{}[]>;

  constructor(
    public companiesService: CompaniesService,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    // Recuperando um documento específico - Usuário
    this.usersService.usersRef.doc(this.userUid)
      .valueChanges()
      .subscribe((user: User) => {
        this.currentUser = user;
      });

    this.myCompanies$ = this.usersService.usersRef.doc(this.userUid)
      .collection('companies').valueChanges();
  }

}
