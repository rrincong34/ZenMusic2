import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReproduccionComponent } from './vista-reproduccion.component';

describe('VistaReproduccionComponent', () => {
  let component: VistaReproduccionComponent;
  let fixture: ComponentFixture<VistaReproduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaReproduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaReproduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
