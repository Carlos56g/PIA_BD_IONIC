import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarDependenciaPage } from './modificar-dependencia.page';

describe('ModificarDependenciaPage', () => {
  let component: ModificarDependenciaPage;
  let fixture: ComponentFixture<ModificarDependenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDependenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
