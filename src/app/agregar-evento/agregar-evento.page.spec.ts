import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarEventoPage } from './agregar-evento.page';

describe('AgregarEventoPage', () => {
  let component: AgregarEventoPage;
  let fixture: ComponentFixture<AgregarEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
