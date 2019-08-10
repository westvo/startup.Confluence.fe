import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpacesComponent } from './list-spaces.component';

describe('ListSpacesComponent', () => {
  let component: ListSpacesComponent;
  let fixture: ComponentFixture<ListSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
