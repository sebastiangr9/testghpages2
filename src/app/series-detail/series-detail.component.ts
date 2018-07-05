import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesDetailsService } from '../services/series-details.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {

  public serie:any;
  public actors:any;

  constructor(
    private serieDeatailservice: SeriesDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
      {
        let idSerie:number = +params['id'];
        this.serieDeatailservice.getSerie(idSerie).subscribe(
        (data)=>{
          this.serie=data
        },
        (error)=>{
          console.log(error)
        }
        )
      })

    this.route.params.subscribe(params=>
      {
        let idSerie:number = +params['id'];
        this.serieDeatailservice.getDetail(idSerie).subscribe(
        (data)=>{
          this.actors=data
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
