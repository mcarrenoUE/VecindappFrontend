import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoTrabajadorComponent } from './ingreso-trabajador.component';

describe('IngresoTrabajadorComponent', () => {
  let component: IngresoTrabajadorComponent;
  let fixture: ComponentFixture<IngresoTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresoTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
