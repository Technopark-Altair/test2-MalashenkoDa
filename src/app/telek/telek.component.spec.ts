import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelekComponent } from './telek.component';

describe('TelekComponent', () => {
  let component: TelekComponent;
  let fixture: ComponentFixture<TelekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
