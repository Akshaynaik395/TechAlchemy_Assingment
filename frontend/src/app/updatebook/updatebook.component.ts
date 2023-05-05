import { Component } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router'
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {
  addbook:any;
  submitted=false;
  id:any
ngOnInit(): void {
  this.id=this.url.snapshot.params['id']
  this.bookservice.singleupdate(this.id).subscribe(data=>{
    this.addbook.patchValue(data)
  })
}

constructor( private formbuilder:FormBuilder,routes:Router,private bookservice:BookServiceService,private url:ActivatedRoute){
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
    alert("Data submitted !!!!!!!!")
    console.log(this.addbook.value);
this.bookservice.updatebookdata(this.id,this.addbook.value).subscribe((data:any)=>{
  console.log(data)
 })
  }

}

}
