import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { FilmInterface } from '../../types/film.interface';
import { genreNameMapper } from '../../utils/genreNameMapper.function';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details-component.html',
  styleUrls: ['./film-details-component.scss'],
})
export class FilmDetailsComponent {
  @Output() onCloseEmit = new EventEmitter<void>();
  @Output() onToggleBestEmit = new EventEmitter<FilmInterface | null>();

  get isBest(): boolean {
    if (!this.data.currentBestFilm) {
      return false;
    }
    return this.data.currentBestFilm.id === this.data.filmData.id;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose() {
    this.onCloseEmit.emit();
  }

  onToggleBest() {
    if (this.isBest) {
      this.onToggleBestEmit.emit(null);
    }
    this.onToggleBestEmit.emit(this.data.filmData);
  }

  getFilmGenre(): string {
    return genreNameMapper(this.data.filmData.genre);
  }

  getImgUrl(): string {
    return `images/${this.data.filmData.id}.jpeg`;
  }
}
