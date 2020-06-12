import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoRegistradosComponent } from './menu-no-registrados.component';

describe('MenuNoRegistradosComponent', () => {
  let component: MenuNoRegistradosComponent;
  let fixture: ComponentFixture<MenuNoRegistradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNoRegistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNoRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
