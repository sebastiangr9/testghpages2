import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  private img: string = "http://image.tmdb.org/t/p/original";
  private url3: string = "https://api.themoviedb.org/3/movie/";
  private key: string = "?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  private url: string = "https://api.themoviedb.org/3/movie/";
  private part: string = "/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  
  constructor(
    private http: HttpClient
  ) { }

  getActorsMovie(idMovie){
    return this.http.get(this.url + idMovie + this.part)
    .pipe(
      map(
        (data:any)=>{
          return data.cast.map((item)=>{
            let urlImg='/assets/movieNull.png'
            if(item.hasOwnProperty('profile_path')){
              if(item.profile_path){
                urlImg=this.img+item.profile_path
              }
            }
            return{
              id: item.id,
              name: item.name,
              character: item.character,
              profile_path: urlImg
            }
          });
        }
      )
    );
  }
  getDetail(idMovie:number){
    return this.http.get(this.url3+idMovie+this.key)
    .pipe(
      map((data:any)=>{
        return {
          backdrop_path: this.img+data.backdrop_path,
          genres: data.genres,
          original_title: data.original_title,
          overview: data.overview,
          poster_path: this.img + data.poster_path,
          production_companies: data.production_companies,
          production_countries: data.production_countries,
          vote_average: data.vote_average

        }
      })
    );
  }
}
