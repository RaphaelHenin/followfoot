import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastScoresComponent } from './last-scores.component';

describe('LastScoresComponent', () => {
  let component: LastScoresComponent;
  let fixture: ComponentFixture<LastScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
