import { Pipe, PipeTransform } from '@angular/core';
import { FilmInterface } from '../types/film.interface';

@Pipe({
  name: 'filmsFilter',
})
export class FilmsFilterPipe implements PipeTransform {
  transform(
    films: FilmInterface[],
    filterCode: number = 0,
    filterStr: string = ''
  ): FilmInterface[] {
    if (!filterCode && !filterStr.trim()) {
      return films;
    }

    if (!filterCode && !!filterStr.trim()) {
      return films.filter((film) =>
        film.name.toLowerCase().includes(filterStr.toLowerCase())
      );
    }

    if (filterCode && !filterStr.trim()) {
      return films.filter((film) => film.genre.includes(filterCode));
    }

    return films
      .filter((film) => film.genre.includes(filterCode))
      .filter((film) =>
        film.name.toLowerCase().includes(filterStr.toLowerCase())
      );
  }
}
