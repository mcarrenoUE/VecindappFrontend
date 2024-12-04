import { TestBed } from '@angular/core/testing';

import { InicioTrabajadorService } from './inicio-trabajador.service';

describe('InicioTrabajadorService', () => {
  let service: InicioTrabajadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioTrabajadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
