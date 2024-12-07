import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteubicacionComponent } from './clienteubicacion.component';

describe('ClienteubicacionComponent', () => {
  let component: ClienteubicacionComponent;
  let fixture: ComponentFixture<ClienteubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteubicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
