import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { PrincipalComponent } from './principal/principal.component';
import { MovieService } from './services/movie.service';
import { HttpModule } from '@angular/http';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RootComponent } from './root/root.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

const appRoutes: Routes=[
  {
    path:'',
    component: RootComponent
  },
  {
    path:'movieDetails/:id',
    component: MovieDetailsComponent
  },
  {
    path:'actorDetails/:id',
    component: ActorDetailsComponent
  },
  {
    path: 'seriesDetails/:id',
    component: SeriesDetailComponent
  },
  {
    path:'movies',
    component: MoviesComponent
  },
  {
    path:'actors',
    component: ActorsComponent
  },
  {
    path:'series',
    component: SeriesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    PrincipalComponent,
    ActorDetailsComponent,
    MovieDetailsComponent,
    RootComponent,
    SeriesComponent,
    SeriesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpModule,
    MatInputModule,
    MatCardModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
