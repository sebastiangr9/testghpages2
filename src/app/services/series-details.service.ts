import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesDetailsService {

  private url: string = "https://api.themoviedb.org/3/tv/";
  private part: string = "?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  private img: string = "http://image.tmdb.org/t/p/original";
  private url2: string = "https://api.themoviedb.org/3/tv/"
  private part2 : string = "/credits?api_key=977cda5d9bfac0a6b0252ef0272785b6";

  constructor(
    private http: HttpClient
  ) { }

  getSerie(idSerie){
    return this.http.get(this.url+idSerie+this.part)
    .pipe(
      map((data:any)=>{
        return {
          backdrop_path: this.img+data.backdrop_path,
          created_by: data.created_by,
          episode_run_time: data.episode_run_time,
          genres: data.genres,
          id: data.id,
          name: data.original_name,
          number_of_episodes: data.number_of_episodes,
          number_of_seasons: data.number_of_seasons,
          overview: data.overview,
          poster_path: this.img+data.poster_path,
          production_companies: data.production_companies,
          vote_average: data.vote_average
        }
      })
    );
  }

  getDetail(idserie:number){
    return this.http.get(this.url2 + idserie + this.part2)
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
            return {
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
}
