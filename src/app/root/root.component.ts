import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../services/principal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  newMovies:any;

  constructor(
    private principalService: PrincipalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.principalService.getNewMovies().subscribe(
      (data)=>{
          this.newMovies=data;
      },
      (error)=>{
          console.log(error)
      }
  )
  }
  onClick(movie){
    this.router.navigate(['/movieDetails', movie])
  }

}
