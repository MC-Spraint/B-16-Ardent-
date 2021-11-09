import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  ml:any;
  fml:any;
  people=[] as any;
  constructor(public _sortingService: SortingService){}
  ngOnInit(): any{
    this.people=this._sortingService.returnArray()
    console.log(this.people);
    
  }
  clickmale(){
    this.people=this._sortingService.returnMale()
    console.log(this.people);
  }
  clickfemale(){
    this.people=this._sortingService.returnFemale()
    console.log(this.people);
  }
  clickboth(){
    this.people=this._sortingService.returnArray()
    console.log(this.people);
  }
  
}
