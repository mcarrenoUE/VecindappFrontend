import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteUbicacionComponent } from './cliente-ubicacion.component';

describe('ClienteUbicacionComponent', () => {
  let component: ClienteUbicacionComponent;
  let fixture: ComponentFixture<ClienteUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteUbicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
