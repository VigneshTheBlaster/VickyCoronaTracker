import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VickySignupComponent } from './vicky-signup.component';

describe('VickySignupComponent', () => {
  let component: VickySignupComponent;
  let fixture: ComponentFixture<VickySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VickySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VickySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
