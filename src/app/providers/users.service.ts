import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CollectionReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../interfaces/user';
import { firestore } from 'firebase/app';

@Injectable()
export class UsersService {

  usersRef: AngularFirestoreCollection<User>;

  constructor(
    private db: AngularFirestore
  ) {
    // referências não executa nenhuma operação de rede.
    this.usersRef = this.db.collection<User>('users');
  }

  addUserId(user: User): Promise<void> {
    return this.usersRef
      .doc<User>(user.uid)
      .set({ // Set substitui o objeto inteito
        'uid': user.uid,
        'email': user.email,
        'passwd': user.passwd
      });
  }

  deleteUser(user: User): Promise<void> {
    return this.usersRef
      .doc<User>(user.uid)
      .delete();
  }

  getUserId(uid: string): Observable<User> {
    return this.usersRef.doc<User>(uid).valueChanges();
  }

  getUserEmail(email: string): Observable<any> {
    return this.db.collection('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  getAllUsers(): any {
    // return this.usersRef.valueChanges();
    return this.usersRef.ref.get().then((querySnapshot) => {
      return querySnapshot;
    });
  }

  updateUser(user: User): Promise<void> {
    return this.usersRef
      .doc<User>(user.uid)
      .update(user);
  }

}
