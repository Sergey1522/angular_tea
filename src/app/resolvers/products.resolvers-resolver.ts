import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsType } from '../types/products-type';
import { ProductsService } from '../services/products-service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<ProductsType[]> {
  constructor(private productService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductsType[]> {
    // Принудительно загружаем продукты при каждом переходе
    return this.productService.getProducts();
  }
}
