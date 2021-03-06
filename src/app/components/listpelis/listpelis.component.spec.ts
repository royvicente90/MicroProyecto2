import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpelisComponent } from './listpelis.component';

describe('ListpelisComponent', () => {
  let component: ListpelisComponent;
  let fixture: ComponentFixture<ListpelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
