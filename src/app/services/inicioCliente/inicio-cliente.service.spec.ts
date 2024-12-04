import { TestBed } from '@angular/core/testing';

import { InicioClienteService } from './inicio-cliente.service';

describe('InicioClienteService', () => {
  let service: InicioClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
