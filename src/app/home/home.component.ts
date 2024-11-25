import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common';
import { MycustompipePipe } from '../mycustompipe.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MycustompipePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  
  name:string="cloudcampus";
  data={name:'shazia',course:'angular'};
  info:any=[];
  today=new Date();
  
  //what is dependency injection in angular js?
constructor(private httpdata:MyServiceService){

}
showData(){
 // this.httpdata.getApiData();
  this.httpdata.getApiData().subscribe((result:any)=>{
    console.log(result);
   console.log(typeof(result))
   const keys = Object.keys(result);
   console.log(keys);
    console.log(result.Data);
   
  this.info=result.Data;
  })
}

}
