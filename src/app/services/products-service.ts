import { Injectable } from '@angular/core';
import { ProductsType } from '../types/products-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderType } from '../types/order-type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: string = '';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>('https://testologia.ru/tea');
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
