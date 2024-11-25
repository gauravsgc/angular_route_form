import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  getApiData(){
    // console.log('api will call');
    return this.http.get(`http://localhost:8000/home`)
  }
  PostApiData(value: any){
    // console.log('api will call');
    return this.http.post(`http://localhost:8000/home`,value);
  }
  
}
