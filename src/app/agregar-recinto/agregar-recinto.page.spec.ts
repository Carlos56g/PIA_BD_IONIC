import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRecintoPage } from './agregar-recinto.page';

describe('AgregarRecintoPage', () => {
  let component: AgregarRecintoPage;
  let fixture: ComponentFixture<AgregarRecintoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRecintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
