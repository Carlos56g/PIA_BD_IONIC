import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DependenciasPage } from './dependencias.page';

describe('DependenciasPage', () => {
  let component: DependenciasPage;
  let fixture: ComponentFixture<DependenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
