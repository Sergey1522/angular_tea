import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products/products';
import { Product } from './product/product';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, Products, Product],
})
export class ProductsModule {}
