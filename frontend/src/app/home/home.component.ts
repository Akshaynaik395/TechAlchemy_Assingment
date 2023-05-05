import { Component,OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import{Router} from '@angular/router'
import { BookServiceService } from '../book-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addbook:any;
  submitted=false;
  isbn: any;
ngOnInit(): void {}

constructor( private formbuilder:FormBuilder,routes:Router,private bookservice:BookServiceService){

  this.isbn = bookservice.generateIsbn()
  this.addbook=formbuilder.group(
  {
    Book_Title:['',Validators.required],
    Author:['',Validators.required],
    ISBN:['',Validators.required]
  })
}



onsubmit(){
  this.submitted=true;
  if(this.addbook.valid){
    alert("Record submitted!!!!!!!")
    console.log(this.addbook.value);
this.bookservice.addbook(this.addbook.value).subscribe((data:any)=>{
  console.log(data)
 })
  }

}
}
