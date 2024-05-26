import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DependenciaModificadaComponent } from './dependencia-modificada.component';

describe('DependenciaModificadaComponent', () => {
  let component: DependenciaModificadaComponent;
  let fixture: ComponentFixture<DependenciaModificadaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DependenciaModificadaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DependenciaModificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
