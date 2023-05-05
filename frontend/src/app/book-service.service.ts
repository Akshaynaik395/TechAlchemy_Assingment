import { Injectable } from '@angular/core';
import{HttpClient,HttpParams}from '@angular/common/http';
import { Book } from 'books.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  selectedEmployee: Book = {
    _id: undefined
  };
  book?:Book;
  getBook: any;

  constructor(private http:HttpClient) { }

  addbook(book:Book){
    return this.http.post('http://localhost:3000/books',book)
  }
  allbook(){
    return this.http.get('http://localhost:3000/books')
  }

  updatebook(book:Book){
    return this.http.put('http://localhost:3000/books'+`/${book._id}`,book)
  }
  updatebookdata(id:any,book:Book){
    return this.http.put(`${'http://localhost:3000/books'}/${id}`,book)
  }
  singleupdate(id:any){
    return this.http.get('http://localhost:3000/books/' +id)
  }
  deletebook(id:any){
    return this.http.delete('http://localhost:3000/books/'+`${id}`);
  }

  generateIsbn():number {
    let randomNumber = Math.floor(Math.random() * 100000000000);
    return randomNumber;
  }
  
}
