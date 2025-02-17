import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService); // Inject the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to favorites', () => {
    service.addToFavorites({ id: 1, name: 'Test' }); // Add an item to the favorites
    expect(service.getFavorites().length).toBe(1); // Check that the length is 1
  });

  it('should return the correct favorite item', () => {
    const item = { id: 2, name: 'Another Test' };
    service.addToFavorites(item); // Add another item
    expect(service.getFavorites()).toContain(item); // Verify that the item exists in the favorites
  });
});
