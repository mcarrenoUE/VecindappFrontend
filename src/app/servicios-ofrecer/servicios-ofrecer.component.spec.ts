import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosOfrecerComponent } from './servicios-ofrecer.component';

describe('ServiciosOfrecerComponent', () => {
  let component: ServiciosOfrecerComponent;
  let fixture: ComponentFixture<ServiciosOfrecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosOfrecerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosOfrecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
