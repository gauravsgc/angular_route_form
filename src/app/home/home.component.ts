import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  info:any=[];
constructor(private httpdata:MyServiceService){

}
showData(){
 // this.httpdata.getApiData();
  this.httpdata.getApiData().subscribe(result=>{
    console.log(result);
    
  this.info=result;
  })
}

}
