import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbyIDComponent } from './bookby-id.component';

describe('BookbyIDComponent', () => {
  let component: BookbyIDComponent;
  let fixture: ComponentFixture<BookbyIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbyIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbyIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
