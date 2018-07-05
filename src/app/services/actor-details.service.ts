import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorDetailsService {

  private url2: string = "https://api.themoviedb.org/3/person/";
  private part: string = "/movie_credits?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  private url: string = "https://api.themoviedb.org/3/person/";
  private key: string = "?api_key=977cda5d9bfac0a6b0252ef0272785b6";
  private img: string = "http://image.tmdb.org/t/p/original";

  constructor(
    private http: HttpClient
  ) { }

  getActor(idActor){
    return this.http.get(this.url+idActor+this.key)
    .pipe(
      map((data:any)=>{
        let urlImg='/assets/movieNull.png'
        if(data.hasOwnProperty('profile_path')){
          if(data.profile_path){
            urlImg=this.img+data.profile_path
          }
        }
        return {
          birthday: data.birthday,
          deathday: data.deathday,
          name: data.name,
          biography: data.biography,
          profile_path: urlImg
        }
      })
    );
  }
  getMoviesActor(idActor){
    return this.http.get(this.url2+idActor+this.part)
    .pipe(
      map((data:any)=>{
        return data.cast.map((item)=>{
          let urlImg='/assets/movieNull.png'
          if(item.hasOwnProperty('poster_path')){
            if(item.poster_path){
              urlImg=this.img+item.poster_path
            }
          }
          return{
            id: item.id,
            character: item.character,
            poster_path: urlImg

          }
        });
      })
    );
  }
  }

