import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CollectionReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../interfaces/user';
import { firestore } from 'firebase/app';

@Injectable()
export class UsersService {

  usersRef: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;
  user: Observable<User | null>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setUsers();
  }

  setUsers() {
    this.usersRef = this.db.collection<User>('users');
    this.users$ = this.usersRef.valueChanges();
  }

  addUser(user: User): Promise<User> {
    const uid = this.db.createId();
    return this.usersRef
      .add({ 'uid': uid, 'email': user.email, 'passwd': user.passwd })
      .then((docRef) => {
        return docRef;
      })
      .catch((error) => {
        return error;
      });
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
    // return this.db.doc('users/' + id).valueChanges();
    return this.usersRef.doc<User>(uid).valueChanges();
  }

  getUserEmail(email: string): Observable<any> {
    return this.db.collection('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  getAllUsers(): any {
    return this.users$;
  }

  updateUserPasswd(user: User): Promise<void> {
    return this.usersRef
      .doc<User>(user.uid)
      .update({ // Update modifica apenas o item
        'passwd': user.passwd
      });
  }


}
