import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private url: string="https://api.themoviedb.org/3/search/tv?api_key=977cda5d9bfac0a6b0252ef0272785b6&query=";
  private img: string = "http://image.tmdb.org/t/p/original";
  private url2: string = "https://api.themoviedb.org/3/tv/top_rated?api_key=977cda5d9bfac0a6b0252ef0272785b6"
  
  constructor(
    private http: HttpClient
  ) { }

  getSeries(nameSerie){
    return this.http
    .get(this.url + nameSerie)
    .pipe(
      map(
        (data: any)=>{
        return data.results.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('poster_path')){
            if(item.poster_path){
              urlImg=this.img+item.poster_path
            }
          }
          return {
            id: item.id,
            name: item.original_name,
            vote_average: item.vote_average,
            poster_path: urlImg
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
        return data.results.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('poster_path')){
            if(item.poster_path){
              urlImg=this.img+item.poster_path
            }
          }
          return {
            id: item.id,
            title: item.original_name,
            poster_path: urlImg,
            bg_poster: this.img+item.backdrop_path
          }
        });
      }
    ));
  }
}
