import { Injectable } from '@angular/core';
import { ProductsType } from '../types/products-type';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { OrderType } from '../types/order-type';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: string = '';
  private productsSubject = new BehaviorSubject<ProductsType[]>([]);
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>('https://testologia.ru/tea').pipe(
      tap((products) => {
        console.log('Все продукты подгружены', products);
        this.productsSubject.next(products);
      }),
    );
  }

  getProduct(id: number): Observable<ProductsType> {
    console.log(id);
    return this.http.get<ProductsType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderType) {
    return this.http.post<{ success: boolean; message?: string }>(
      'https://testologia.ru/order-tea',
      data,
    );
  }
}
