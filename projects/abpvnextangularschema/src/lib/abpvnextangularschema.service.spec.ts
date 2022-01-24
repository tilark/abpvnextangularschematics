import { TestBed } from '@angular/core/testing';

import { AbpvnextangularschemaService } from './abpvnextangularschema.service';

describe('AbpvnextangularschemaService', () => {
  let service: AbpvnextangularschemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbpvnextangularschemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
