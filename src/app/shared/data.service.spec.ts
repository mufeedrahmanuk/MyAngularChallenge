import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to favorites', () => {
    service.addToFavorites({ id: 1, name: 'Test' });
    expect(service.getFavorites().length).toBe(1);
  });

  it('should return the correct favorite item', () => {
    const item = { id: 2, name: 'Another Test' };
    service.addToFavorites(item);
    expect(service.getFavorites()).toContain(item);
  });
});
