import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarRecintoPage } from './modificar-recinto.page';

describe('ModificarRecintoPage', () => {
  let component: ModificarRecintoPage;
  let fixture: ComponentFixture<ModificarRecintoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRecintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
