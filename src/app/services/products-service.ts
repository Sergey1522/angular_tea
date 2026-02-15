import { Injectable } from '@angular/core';
import { ProductsType } from '../types/products-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductsType> {
    console.log(id);
    return this.http.get<ProductsType>(`https://testologia.ru/tea?id=${id}`);
  }
}
