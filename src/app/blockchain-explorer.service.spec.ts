import { TestBed } from '@angular/core/testing';

import { blockchainExplorerService } from './blockchain-explorer.service';

describe('BlockchainExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: blockchainExplorerService = TestBed.get(blockchainExplorerService);
    expect(service).toBeTruthy();
  });
});
