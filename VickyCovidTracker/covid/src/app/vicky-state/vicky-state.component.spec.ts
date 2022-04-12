import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VickyStateComponent } from './vicky-state.component';

describe('VickyStateComponent', () => {
  let component: VickyStateComponent;
  let fixture: ComponentFixture<VickyStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VickyStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VickyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
