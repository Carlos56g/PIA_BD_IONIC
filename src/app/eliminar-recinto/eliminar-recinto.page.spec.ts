import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarRecintoPage } from './eliminar-recinto.page';

describe('EliminarRecintoPage', () => {
  let component: EliminarRecintoPage;
  let fixture: ComponentFixture<EliminarRecintoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRecintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
