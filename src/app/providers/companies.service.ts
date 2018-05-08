import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company } from './../interfaces/company';

@Injectable()
export class CompaniesService {

  companiesRef: AngularFirestoreCollection<Company>;
  companies$: Observable<Company[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setCompanies();
  }

  setCompanies() {
    this.companiesRef = this.db.collection<Company>('companies');
    this.companies$ = this.companiesRef.valueChanges();
  }

  addCompany(company: Company): Promise<any> {
    const uid = this.db.createId();
    return this.companiesRef
      .add({
        'name': company.name
      })
      .then((docRef) => {
        return docRef;
      })
      .catch((error) => {
        return error;
      });
  }

  addCompanyId(company: Company): Promise<any> {
    return this.companiesRef
      .doc<Company>(company.name)
      .set({ // Set substitui o objeto inteito
        'name': company.name
      });
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
  checkCompanyField(company: string):  Promise<boolean | void> {
    return this.companiesRef.ref.where('name', '==', company).limit(1)
      .get()
      .then(snapshot => {
        if(!snapshot.empty){
          console.log('snaphot com dados');
          return Promise.resolve(true);
        }else{
          console.log('snaphot vazio');
          return Promise.resolve(false);
        }
      })
      .catch(err => {
        console.log('Error getting documents', err);
        Promise.reject(err);
      });
  }

}
