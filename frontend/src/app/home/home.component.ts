import { Component,OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import{Router} from '@angular/router'
import { BookServiceService } from '../book-service.service';
import{v4 as uuidv4} from 'uuid';
function generateIsbn():string {
  const uuid=uuidv4().replace(/-/g, '').substr(0,12);
  const digits=[...uuid].map((digit)=>parseInt(digit));
  let sum=0;

  for(let i=0;i<12;i++){
    sum+=(i % 2 === 0)? digits[i]:digits[i]*3;
  }
  const checkDigit =(10-(sum%10))%10;
  return `${uuid}-${checkDigit}`
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addbook:any;
  submitted=false;
  isbn: string = generateIsbn()
ngOnInit(): void {}

constructor( private formbuilder:FormBuilder,routes:Router,private bookservice:BookServiceService){
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
