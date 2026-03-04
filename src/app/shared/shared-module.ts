import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main } from '../features/main/main';
import { Products } from '../features/products/products/products';
import { Product } from '../features/products/product/product';
import { Order } from '../features/order/order';

@NgModule({
  declarations: [],
  imports: [CommonModule, Main, Products, Product, Order],
})
export class SharedModule {}
