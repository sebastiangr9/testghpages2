import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})

export class ActorsComponent implements OnInit {

  public nameActor:string = "";
  public Actor:any;

  constructor(
    private actorsService: ActorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.actorsService.preLoad().subscribe(
      (data)=>{
        this.Actor=data;
      },
      (error)=>{
        console.error(error)
      }
    )
  }
  searchActor(){
  
    this.actorsService.getActors(this.nameActor).subscribe(
      (data) => {
        this.Actor = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  onClick(movie){
    this.router.navigate(['/actorDetails', movie])
  }
}