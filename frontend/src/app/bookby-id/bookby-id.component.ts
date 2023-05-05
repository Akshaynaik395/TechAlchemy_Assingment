import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-bookby-id',
  templateUrl: './bookby-id.component.html',
  styleUrls: ['./bookby-id.component.css']
})
export class BookbyIDComponent implements OnInit {
book:any;
id:any;
constructor(private bookservice:BookServiceService, private url:ActivatedRoute){}
  ngOnInit(): void {

  }
  searchBook(bookId:any){
    this.bookservice.singleupdate(bookId).subscribe((data)=>{
      this.book=data;
      console.log(data);
    })
  }

}
