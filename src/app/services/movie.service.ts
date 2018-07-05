import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    
  private url: string = "https://api.themoviedb.org/3/search/movie?api_key=977cda5d9bfac0a6b0252ef0272785b6&query=";
  private img: string = "http://image.tmdb.org/t/p/original";
  private url2: string = "https://api.themoviedb.org/3/movie/popular?api_key=977cda5d9bfac0a6b0252ef0272785b6";

  constructor(
    private http: HttpClient
  ) { }

  getMovies(nameMovie:string){
    return this.http
    .get(this.url + nameMovie)
    .pipe(
      map(
        (data: any)=>{
          // return data
        return data.results.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('poster_path')){
            if(item.poster_path){
              urlImg=this.img+item.poster_path
            }
          }
          return {
            id: item.id,
            title: item.title,
            vote_count: item.vote_count,
            vote_averange: item.vote_average,
            popularity: item.popularity,
            poster: urlImg,
            bg_poster: this.img+item.backdrop_path,
            len_or: item.original_language,
            geres: item.genre_ids,
            overview: item.overview,
            release_date: item.release_date
          }
        });
      }
    ));
  }

  preLoad(){
    return this.http
    .get(this.url2)
    .pipe(
      map(
        (data: any)=>{
          // return data
        return data.results.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('poster_path')){
            if(item.poster_path){
              urlImg=this.img+item.poster_path
            }
          }
          return {
            id: item.id,
            title: item.title,
            poster: urlImg
          }
        });
      }
    ));

  }
}