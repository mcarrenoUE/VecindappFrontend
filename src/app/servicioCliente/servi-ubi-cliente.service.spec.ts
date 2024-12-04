import { TestBed } from '@angular/core/testing';

import { ServiUbiClienteService } from './servi-ubi-cliente.service';

describe('ServiUbiClienteService', () => {
  let service: ServiUbiClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiUbiClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
