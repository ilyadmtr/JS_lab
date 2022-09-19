import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreebtnsComponent } from './threebtns.component';

describe('ThreebtnsComponent', () => {
  let component: ThreebtnsComponent;
  let fixture: ComponentFixture<ThreebtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreebtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreebtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
