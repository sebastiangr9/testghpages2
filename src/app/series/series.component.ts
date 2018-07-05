import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public series:any;
  public nameSerie:string="";

  constructor(
    private serieService: SeriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serieService.preLoad().subscribe(
      (data)=>{
        this.series=data;
      },
      (error)=>{
        console.error(error)
      }
    )
  }

  searchSerie(){
  
    this.serieService.getSeries(this.nameSerie).subscribe(
      (data) => {
        console.log(data);
        this.series = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
  onClick(serie){
    this.router.navigate(['/seriesDetails', serie])
  }
}
