import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a filled in star if the rating is greater than the current star index', () => {
    component.rating = 5;
    const result = component.getIcon(0);
    expect(result).toEqual('star');
  });

  it('should display an empty star if the rating is less than the current star index', () => {
    component.rating = 1;
    const result = component.getIcon(4);
    expect(result).toEqual('star_border');
  });
});
