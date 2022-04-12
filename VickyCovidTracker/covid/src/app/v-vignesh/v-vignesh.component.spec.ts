import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VVigneshComponent } from './v-vignesh.component';

describe('VVigneshComponent', () => {
  let component: VVigneshComponent;
  let fixture: ComponentFixture<VVigneshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVigneshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VVigneshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
