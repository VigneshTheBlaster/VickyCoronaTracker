import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VickyLoginComponent } from './vicky-login.component';

describe('VickyLoginComponent', () => {
  let component: VickyLoginComponent;
  let fixture: ComponentFixture<VickyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VickyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VickyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
