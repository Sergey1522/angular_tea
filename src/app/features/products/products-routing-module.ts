import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { Products } from './products/products';

const routes: Routes = [
  { path: 'products', component: Products },
  { path: 'product/:id', component: Product },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
