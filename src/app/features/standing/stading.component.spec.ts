import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingComponent } from './standing.component';

describe('LeaderboardComponent', () => {
  let component: StandingComponent;
  let fixture: ComponentFixture<StandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
