import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarDependenciaPage } from './agregar-dependencia.page';

describe('AgregarDependenciaPage', () => {
  let component: AgregarDependenciaPage;
  let fixture: ComponentFixture<AgregarDependenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDependenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
