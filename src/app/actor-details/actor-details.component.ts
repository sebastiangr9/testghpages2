import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorDetailsService } from '../services/actor-details.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  public actor:any;
  public moviesActor:any;

  constructor(
    private route: ActivatedRoute,
    private movieService: ActorDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
      {
        let idActor:number = +params['id'];
        this.movieService.getActor(idActor).subscribe(
        (data)=>{
          this.actor=data
        },
        (error)=>{
          console.log(error)
        }
        )
      })
    
    this.route.params.subscribe(params=>
        {
          let idActor:number = +params['id'];
          this.movieService.getMoviesActor(idActor).subscribe(
          (data)=>{
            this.moviesActor=data
          },
          (error)=>{
            console.log(error)
          }
          )
        })
  }
  
  onClick(movie){
    this.router.navigate(['/movieDetails', movie])
  }
}
