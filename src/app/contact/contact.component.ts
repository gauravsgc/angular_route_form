import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private httpdata:MyServiceService){

  }
  user = {
    username: '',
    userpass: ''
  };
  sumbitHandler(form: any) {
    // debugger;
    console.log(form);
    
    console.log(form.value);
    console.log(this.httpdata);
    
    this.httpdata.PostApiData(form.value).subscribe(result=>{
      if(result){
        console.log(result);
        
     alert('saved')
      }
      else{
      console.log(result);
      
      }
    })
    
  }
}
