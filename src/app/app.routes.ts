import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Products } from './components/products/products';
import { Product } from './components/product/product';
import { Order } from './components/order/order';
import { ProductsResolver } from './resolvers/products.resolvers-resolver';

export const routes: Routes = [
  { path: '', component: Main },
  {
    path: 'products',
    component: Products,
    runGuardsAndResolvers: 'always',
    resolve: {
      products: ProductsResolver,
    },
  },
  { path: 'product/:id', component: Product },
  { path: 'order', component: Order },
];
