import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }


  // insere usuario no AUTH
  addUserAuth(email: string, password: string): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log('error:' + err);
      });
  }

  // efetua logout no AUTH
  logout(): Promise<any> {
    console.log('Auth: authLogout()');
    return this.afAuth.auth
      .signOut()
      .catch(err => {
        console.log('erro: ' + err);
      });
  }

  isAuthenticated() {
    const user = this.afAuth.authState;
    return user.subscribe(res => {
      if (res !== null) {
        return true;
      } else {
        return false;
      }
    });
  }
  // autentica usuario e senha no AUTH
  signinWithEmail(email: string, password: string): Promise<boolean> {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        // console.log('Erro na autenticacao: ' + err);
      });
  }


}
