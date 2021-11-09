import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  
  people:any=[{gender:"male",code:"01",name:"Max",salary:"2000",dob:"3/8/94"},
            {gender:"male",code:"02",name:"David",salary:"4000",dob:"7/5/95"},
            {gender:"male",code:"03",name:"Alex",salary:"6000",dob:"9/8/96"},
            {gender:"female",code:"04",name:"Maria",salary:"3000",dob:"5/9/97"},
            {gender:"female",code:"05",name:"Britney",salary:"5000",dob:"1/5/98"},
            {gender:"female",code:"06",name:"Hailee",salary:"7000",dob:"22/10/99"}]

  constructor() { }
  
  
  returnArray(){
    return this.people;
    
  }
  returnMale(){
    const result = this.people.reduce((h:any, obj:any) => Object.assign(h, { [obj.gender]:( h[obj.gender] || [] ).concat(obj) }), {})
    return result.male;
  }
  returnFemale(){
    const result = this.people.reduce((h:any, obj:any) => Object.assign(h, { [obj.gender]:( h[obj.gender] || [] ).concat(obj) }), {})
    return result.female;
  }
}
