import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesTodasComponent } from './canciones-todas.component';

describe('CancionesTodasComponent', () => {
  let component: CancionesTodasComponent;
  let fixture: ComponentFixture<CancionesTodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesTodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
