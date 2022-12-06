import { TestBed } from '@angular/core/testing';

import { ClearomizerService } from './clearomizer.service';

describe('ClearomizerService', () => {
  let service: ClearomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
