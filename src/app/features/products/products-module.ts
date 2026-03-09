import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products/products';
import { Product } from './product/product';
import { ProductsService } from './services/products-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsRoutingModule, Products, Product, HttpClientModule],
  providers: [ProductsService],
})
export class ProductsModule {}
