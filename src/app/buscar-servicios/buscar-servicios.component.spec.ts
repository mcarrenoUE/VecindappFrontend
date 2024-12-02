import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarServiciosComponent } from './buscar-servicios.component';

describe('BuscarServiciosComponent', () => {
  let component: BuscarServiciosComponent;
  let fixture: ComponentFixture<BuscarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
