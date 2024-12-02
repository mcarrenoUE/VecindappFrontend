import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecerServiciosComponent } from './ofrecer-servicios.component';

describe('OfrecerServiciosComponent', () => {
  let component: OfrecerServiciosComponent;
  let fixture: ComponentFixture<OfrecerServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfrecerServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfrecerServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
