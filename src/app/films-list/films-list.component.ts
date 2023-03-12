import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FilmDetailsComponent } from './components/film-details/film-details-component';

import { FilmsListService } from './services/films-list.service';
import { FilmInterface } from './types/film.interface';
import { GenreInterface } from './types/genre.interface';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit, OnDestroy {
  filmsList: FilmInterface[];
  currentBestFilm: FilmInterface = null;
  currentBestFilmSub$: Subscription;
  genreCode: number = 0;
  filmNameStr: string = '';

  genre: GenreInterface[] = [
    {
      value: 0,
      name: 'все',
    },
    {
      value: 1,
      name: 'драма',
    },
    {
      value: 2,
      name: 'биография',
    },
    {
      value: 3,
      name: 'история',
    },
    {
      value: 4,
      name: 'фэнтези',
    },
    {
      value: 5,
      name: 'приключения',
    },
    {
      value: 6,
      name: 'боевик',
    },
    {
      value: 7,
      name: 'мультфильм',
    },
    {
      value: 8,
      name: 'комедия',
    },
    {
      value: 9,
      name: 'триллер',
    },
    {
      value: 10,
      name: 'детектив',
    },
    {
      value: 11,
      name: 'фантастика',
    },
  ];

  constructor(
    private filmsListService: FilmsListService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.currentBestFilmSub$.unsubscribe();
  }

  getData(): void {
    this.filmsList = this.filmsListService.getFilmsList();
    this.currentBestFilmSub$ = this.filmsListService
      .getBestFilm()
      .subscribe((res) => {
        this.currentBestFilm = res;
      });
  }

  onOpenDialog(openFilm: FilmInterface): void {
    const dialogRef = this.matDialog.open(FilmDetailsComponent, {
      width: '756px',
      data: {
        filmData: openFilm,
        currentBestFilm: this.currentBestFilm,
      },
      autoFocus: false,
    });

    const dialogCloseSubscription =
      dialogRef.componentInstance.onCloseEmit.subscribe(() => {
        dialogRef.close();
        dialogCloseSubscription.unsubscribe();
      });

    const dialogToggleBestSubscription =
      dialogRef.componentInstance.onToggleBestEmit.subscribe((res) => {
        if (res) {
          this.filmsListService.setBestFilm(res);
        } else {
          this.filmsListService.removeBestFilm();
        }
        dialogRef.close();
        dialogToggleBestSubscription.unsubscribe();
      });
  }

  setBestFilm(film: FilmInterface): void {
    this.filmsListService.setBestFilm(film);
  }

  removeBestFilm(): void {
    this.filmsListService.removeBestFilm();
  }
}
