import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarDependenciaPage } from './eliminar-dependencia.page';

describe('EliminarDependenciaPage', () => {
  let component: EliminarDependenciaPage;
  let fixture: ComponentFixture<EliminarDependenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDependenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
