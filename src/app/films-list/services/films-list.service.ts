import { Injectable } from '@angular/core';

import { FilmInterface } from '../types/film.interface';

import filmsData from '../../../data/data.json';
import { PersistanceService } from '../../shared/services/persistance.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsListService {
  bestFilm = new BehaviorSubject<FilmInterface>(null);

  constructor(private persistanceService: PersistanceService) {}

  getFilmsList(): FilmInterface[] {
    return filmsData;
  }

  setBestFilm(film: FilmInterface): void {
    this.bestFilm.next(film);
    this.persistanceService.set('best_film', film);
  }

  getBestFilm(): Observable<FilmInterface> {
    return this.bestFilm.asObservable();
  }

  removeBestFilm() {
    this.bestFilm.next(null);
    this.persistanceService.remove('best_film');
  }

  getBestFilmFromStorage() {
    const bestFilm = this.persistanceService.get('best_film');
    if (bestFilm) {
      this.bestFilm.next(bestFilm);
    } else {
      this.bestFilm.next(null);
    }
  }
}
