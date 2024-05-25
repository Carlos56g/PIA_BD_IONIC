import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarEventoPage } from './eliminar-evento.page';

describe('EliminarEventoPage', () => {
  let component: EliminarEventoPage;
  let fixture: ComponentFixture<EliminarEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
