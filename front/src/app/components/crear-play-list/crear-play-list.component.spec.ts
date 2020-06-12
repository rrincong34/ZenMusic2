import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlayListComponent } from './crear-play-list.component';

describe('CrearPlayListComponent', () => {
  let component: CrearPlayListComponent;
  let fixture: ComponentFixture<CrearPlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
