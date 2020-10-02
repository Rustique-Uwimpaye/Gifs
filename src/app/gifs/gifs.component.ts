import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
gifs: any[] =[];
subscruption: Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.getGifs()
    
  }
  ngOnDestroy(){
    this.subscruption.unsubscribe();
  }
  getGifs(){
    this.dataService.getGifs()
    .subscribe((response: any)=>{
      console.log(response)
    this.gifs = response;
    });
  }

}
