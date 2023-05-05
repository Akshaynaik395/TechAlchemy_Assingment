import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookbyIDComponent } from './bookby-id/bookby-id.component';
import { AllBooksComponent } from './all-books/all-books.component';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { HelpbookComponent } from './helpbook/helpbook.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookbyIDComponent,
    AllBooksComponent,
    UpdatebookComponent,
    HelpbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
