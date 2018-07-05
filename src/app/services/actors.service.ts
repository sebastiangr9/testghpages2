import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  
  private url: string = "https://api.themoviedb.org/3/search/person?api_key=977cda5d9bfac0a6b0252ef0272785b6&language=en-US&query=";
  private img: string = "http://image.tmdb.org/t/p/original";
  private url2: string = "https://api.themoviedb.org/3/person/popular?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  constructor(
    private http: HttpClient
  ) { }

  getActors(nameActor:string){
    return this.http
    .get(this.url + nameActor)
    .pipe(
      map(
        (data: any)=>{
          // return data
        return data.results.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('profile_path')){
            if(item.profile_path){
              urlImg=this.img+item.profile_path
            }
          }
          return {
            id: item.id,
            name: item.name,
            profile_path: urlImg,
            know_for: item.known_for
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
          if(item.hasOwnProperty('profile_path')){
            if(item.profile_path){
              urlImg=this.img+item.profile_path
            }
          }
          return {
            id: item.id,
            name: item.name,
            profile_path: urlImg
          }
        });
      }
    ));

  }
}
