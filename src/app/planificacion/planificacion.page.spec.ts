import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanificacionPage } from './planificacion.page';

describe('PlanificacionPage', () => {
  let component: PlanificacionPage;
  let fixture: ComponentFixture<PlanificacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
