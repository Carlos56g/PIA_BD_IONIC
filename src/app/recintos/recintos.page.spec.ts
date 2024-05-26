import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecintosPage } from './recintos.page';

describe('RecintosPage', () => {
  let component: RecintosPage;
  let fixture: ComponentFixture<RecintosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecintosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
