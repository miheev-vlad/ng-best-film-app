import { Component, OnInit } from '@angular/core';
import { FilmsListService } from './films-list/services/films-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private filmsListService: FilmsListService) {}

  ngOnInit(): void {
    this.filmsListService.getBestFilmFromStorage();
  }
}
