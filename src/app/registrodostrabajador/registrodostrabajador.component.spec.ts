import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodostrabajadorComponent } from './registrodostrabajador.component';

describe('RegistrodostrabajadorComponent', () => {
  let component: RegistrodostrabajadorComponent;
  let fixture: ComponentFixture<RegistrodostrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrodostrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrodostrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
