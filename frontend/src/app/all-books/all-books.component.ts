import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{
  bookdata:any;
  constructor(private bookservice:BookServiceService,private routes:Router){}
ngOnInit(): void {
  this.loadbookdata();
  this.bookservice.refreshBookList();
  // this.bookservice.refreshbookList();
}
loadbookdata(){
  this.bookservice.allbook().subscribe((data:any)=>{
    this.bookdata=data;
  })
}

onDelete(id:any){
  if(confirm('Are you sure to delete this data...')==true){
    this.bookservice.deletebook(id).subscribe(data=>{
      console.log(data);
      this.bookservice.refreshBookList();
      this.bookdata=this.bookdata.filter((u:any)=>u!==id)
      //this.bookservice.refreshbookList();
    })
  }
  else{

  }
  
}
}
