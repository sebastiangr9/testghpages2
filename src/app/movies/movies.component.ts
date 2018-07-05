import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public nameMovie:string="";
  public Movie:any;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }
  ngOnInit() {
    this.movieService.preLoad().subscribe(
      (data)=>{
        this.Movie=data;
      },
      (error)=>{
        console.error(error)
      }
    )
    
  }
  searchMovie(){
  
    this.movieService.getMovies(this.nameMovie).subscribe(
      (data) => {
        console.log(data);
        this.Movie = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  
  onClick(movie){
    this.router.navigate(['/movieDetails', movie])
  }
}