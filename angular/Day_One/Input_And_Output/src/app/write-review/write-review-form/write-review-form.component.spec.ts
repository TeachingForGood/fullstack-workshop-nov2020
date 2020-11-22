import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewFormComponent } from './write-review-form.component';

describe('WriteReviewFormComponent', () => {
  let component: WriteReviewFormComponent;
  let fixture: ComponentFixture<WriteReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
