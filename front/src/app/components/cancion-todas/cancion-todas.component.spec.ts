import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionTodasComponent } from './cancion-todas.component';

describe('CancionTodasComponent', () => {
  let component: CancionTodasComponent;
  let fixture: ComponentFixture<CancionTodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionTodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
