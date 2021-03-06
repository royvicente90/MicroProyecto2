import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedpostComponent } from './selectedpost.component';

describe('SelectedpostComponent', () => {
  let component: SelectedpostComponent;
  let fixture: ComponentFixture<SelectedpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
