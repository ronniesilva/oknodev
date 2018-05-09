import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CollectionReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';

import { Rating } from './../interfaces/rating';

@Injectable()
export class RatingService {

  ratingRef: AngularFirestoreCollection<Rating>;

  constructor(
    private db: AngularFirestore
  ) {
    this.ratingRef = this.db.collection<Rating>('ratings');
  }

  startRating(uid: string): Promise<void> {
    return this.ratingRef
      .doc<Rating>(uid)
      .set({ // Set substitui o objeto inteito
        'uid': uid,
        'like': 0,
        'dislike': 0
      });
  }

  updateRating(rating: Rating): Promise<void> {
    return this.ratingRef
      .doc<Rating>(rating.uid)
      .update(rating);
  }

  getRatingId(uid: string): Observable<Rating[]> {
    return this.db.collection('ratings',
      (ref: CollectionReference) =>
        ref.where('uid', '==', uid))
      .valueChanges();
  }

  getRating(uid: string): Promise<any> {
    return this.db.collection('ratings')
      .doc(uid).ref.get()
      .then(doc => {
        return doc.data();
      })
      .catch(err => console.log('[ERRO]' + err));
  }


}
