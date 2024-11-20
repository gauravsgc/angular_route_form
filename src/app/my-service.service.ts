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
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }
  PostApiData(value: any){
    // console.log('api will call');
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,value);
  }
}
