import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsService } from '../services/movie-details.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public actors:any;
  public movie:any;

  constructor(
    private movieService: MovieDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
      {
        let idMovie:number = +params['id'];
        this.movieService.getActorsMovie(idMovie).subscribe(
        (data)=>{
          this.actors=data
        },
        (error)=>{
          console.log(error)
        }
        )
      })
    
      this.route.params.subscribe(params=>
        {
          let idMovie:number = +params['id'];
          this.movieService.getDetail(idMovie).subscribe(
          (data)=>{
            this.movie=data
          },
          (error)=>{
            console.log(error)
          }
          )
        })
  }

  onClick(actor){
    this.router.navigate(['/actorDetails', actor])
  }

}
