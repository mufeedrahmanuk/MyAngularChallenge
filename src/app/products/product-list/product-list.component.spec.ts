import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { DataService } from '../../shared/data.service'; // Import the DataService
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['addToFavorites']); // Correct way to mock DataService

    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: DataService, useValue: dataServiceSpy }] // Provide the mock DataService
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add product to favorites', () => {
    const product = { name: 'Test Product', id: 1 };

    component.addProductToFavorites(product); // Call the method
    expect(dataServiceSpy.addToFavorites).toHaveBeenCalledWith(product); // Verify the method call with correct product
  });
});
