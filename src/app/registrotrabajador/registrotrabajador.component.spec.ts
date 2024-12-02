import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotrabajadorComponent } from './registrotrabajador.component';

describe('RegistrotrabajadorComponent', () => {
  let component: RegistrotrabajadorComponent;
  let fixture: ComponentFixture<RegistrotrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrotrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrotrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
