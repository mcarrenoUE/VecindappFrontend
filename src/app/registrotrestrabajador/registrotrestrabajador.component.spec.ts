import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotrestrabajadorComponent } from './registrotrestrabajador.component';

describe('RegistrotrestrabajadorComponent', () => {
  let component: RegistrotrestrabajadorComponent;
  let fixture: ComponentFixture<RegistrotrestrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrotrestrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrotrestrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
