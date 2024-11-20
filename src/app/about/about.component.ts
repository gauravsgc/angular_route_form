import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
