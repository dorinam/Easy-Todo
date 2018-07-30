import { TestBed, inject } from '@angular/core/testing';

import { EasytodoDataService } from './easytodo-data.service';

describe('EasytodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EasytodoDataService]
    });
  });

  it('should be created', inject([EasytodoDataService], (service: EasytodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
