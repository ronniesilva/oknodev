import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Rating } from './../../interfaces/rating';
import { RatingService } from './../../providers/rating.service';

@Component({
  selector: 'app-terminal-rating',
  templateUrl: './terminal-rating.component.html',
  styleUrls: ['./terminal-rating.component.scss']
})
export class TerminalRatingComponent implements OnInit {

  private company = 'empresa01';
  rating: Rating;
  rating$: Observable<Rating[]>;

  constructor(
    public ratingService: RatingService
  ) {
    this.rating$ = this.ratingService.getRatingId(this.company);
  }

  ngOnInit() {
    this.rating$.subscribe(x => {
      this.rating = x[0];
    });

  }

  onLikeDislike(cont: number): void {
    this.ratingService.getRating(this.company)
      .then((rat: Rating) => {
        if (cont > 0) {
          this.ratingService.updateRating({ uid: `${this.company}`, like: rat.like + 1 })
            .catch(err => console.log('[Erro]: ' + err));
        } else {
          this.ratingService.updateRating({ uid: `${this.company}`, dislike: rat.dislike + 1 })
            .catch(err => console.log('[Erro]: ' + err));
        }
      })
      .catch(err => console.log('[ERRO]: ' + err));

  }

}
