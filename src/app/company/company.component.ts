import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  info:any=[];
  //dependency injection
constructor(private http:HttpClient){

}
getData(){
  //console.log('api will call');
  this.http.get(`https://jsonplaceholder.typicode.com/posts`).subscribe(
    (result) => {
      console.log(result);
      
      
      this.info = result;
      // console.log(this.info[1].title)
    }
  );
}


}
