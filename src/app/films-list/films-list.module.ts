import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MaterialUiModule } from '../shared/modules/material-ui.module';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmsListComponent } from './films-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details-component';
import { FilmsFilterPipe } from './pipes/filmsFilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [
    FilmsListComponent,
    FilmCardComponent,
    FilmDetailsComponent,
    FilmsFilterPipe,
  ],
  exports: [FilmsListComponent],
})
export class FilmsListModule {}
