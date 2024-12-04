import { TestBed } from '@angular/core/testing';

import { RegistroTrabajadorService } from './registro-trabajador.service';

describe('RegistroTrabajadorService', () => {
  let service: RegistroTrabajadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroTrabajadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
