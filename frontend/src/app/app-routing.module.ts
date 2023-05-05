import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookbyIDComponent } from './bookby-id/bookby-id.component';
import { HelpbookComponent } from './helpbook/helpbook.component';
import { HomeComponent } from './home/home.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
    {
      path:'',component:HomeComponent
    },
    {
      path:'book_by_id',component:BookbyIDComponent
    },
    {
      path:'All_books',component:AllBooksComponent
    },
    {
      path:'help_books',component:HelpbookComponent
    },
    {
      path:'edit/:id',component:UpdatebookComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
