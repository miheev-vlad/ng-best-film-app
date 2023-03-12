import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FilmInterface } from '../../types/film.interface';
import { genreNameMapper } from '../../utils/genreNameMapper.function';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input() filmData: FilmInterface;
  @Input() currentBestFilm: FilmInterface;
  @Output() openDialogEvent = new EventEmitter<FilmInterface>();
  @Output() setBestFilmEvent = new EventEmitter<FilmInterface>();
  @Output() removeBestFilmEvent = new EventEmitter<void>();

  get isFavorite(): boolean {
    if (!this.currentBestFilm) {
      return false;
    }
    return this.currentBestFilm.id === this.filmData.id;
  }

  onClick(e: Event): void {
    e.stopPropagation();
    if (this.isFavorite) {
      this.removeBestFilmEvent.emit();
    } else {
      this.setBestFilmEvent.emit(this.filmData);
    }
  }

  openDialog(): void {
    this.openDialogEvent.emit(this.filmData);
  }

  getFilmGenre(): string {
    return genreNameMapper(this.filmData.genre);
  }

  getImgUrl(): string {
    return `images/${this.filmData.id}.jpeg`;
  }
}
