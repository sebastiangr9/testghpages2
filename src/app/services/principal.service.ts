import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private url:string ="https://api.themoviedb.org/3/movie/upcoming?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  img:string = "http://image.tmdb.org/t/p/original";
  constructor(
    private http: HttpClient
  ) { }

  getNewMovies(){
    return this.http
    .get(this.url)
    .pipe(
      map(
        (data: any)=>{
        return data.results.map((item)=>{
          return {
            vote_count: item.vote_count ,
            id: item.id,
            vote_average: item.vote_average,
            title: item.title,
            popularity: item.popularity,
            poster_path: this.img+ item.poster_path,
            original_language: item.original_language ,
            original_title: item.original_title,
            genre_ids: item.genre_ids,
            backdrop_path: this.img+item.backdrop_path ,
            overview: item.overview,
            release_date: item.release_date
          }
        });
      }
    ));
  }
}
