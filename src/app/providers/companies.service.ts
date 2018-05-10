import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company } from './../interfaces/company';
import { RatingService } from './rating.service';
import { UsersService } from './users.service';

@Injectable()
export class CompaniesService {

  companiesRef: AngularFirestoreCollection<Company>;
  companies$: Observable<Company[]>;

  constructor(
    private db: AngularFirestore,
    public ratingService: RatingService,
    public usersService: UsersService
  ) {
    this.companiesRef = this.db.collection<Company>('companies');
    this.companies$ = this.companiesRef.valueChanges();
  }

  // Insere uma Empresa com UID automático
  addCompany(company: Company): Promise<any> {
    const uid = this.db.createId();
    return this.companiesRef
      .add({
        name: company.name,
        passwd: company.passwd,
        owner: company.owner,
        createdate: new Date()
      })
      .then((docRef) => {
        return docRef;
      })
      .catch((error) => {
        return error;
      });
  }

  // Insere uma empresa com UID específico
  setCompanyId(company: Company): Promise<any> {
    return this.companiesRef
      .doc<Company>(company.name)
      .set({
        name: company.name,
        passwd: company.passwd,
        owner: company.owner,
        createdate: new Date()
      }).then(() => {
        // Criar a collection de companies dentro do user
        this.usersService.usersRef.doc(company.owner)
        .collection('companies').ref.doc(company.name).set({ 'name': company.name });

        // Inicia os Ratings
        this.ratingService.startRating(company.name);
      }).catch(err => console.log('[ERRO]: ' + err));
  }


  // verifica se existe no documento
  checkCompanyDoc(company: string): Promise<boolean | void> {
    return this.companiesRef
      .doc(company)
      .ref
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
        Promise.reject(err);
      });
  }

  // verifica se existe cadastrado no campo
  // checkCompanyField(company: string): Promise<boolean | void> {
  //   return this.companiesRef.ref.where('name', '==', company).limit(1)
  //     .get()
  //     .then(snapshot => {
  //       if (!snapshot.empty) {
  //         console.log('snaphot com dados');
  //         return Promise.resolve(true);
  //       } else {
  //         console.log('snaphot vazio');
  //         return Promise.resolve(false);
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error getting documents', err);
  //       Promise.reject(err);
  //     });
  // }

}
