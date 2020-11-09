import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitarComponent } from './gitar.component';

describe('GitarComponent', () => {
  let component: GitarComponent;
  let fixture: ComponentFixture<GitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
