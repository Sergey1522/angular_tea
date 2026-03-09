import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./features/main/main-module').then((m) => m.MainModule), // Lazy loading
  },

  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products-module').then((m) => m.ProductsModule), // Lazy loading
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./features/products/product/product').then((m) => m.Product), // Lazy loading
  },
  {
    path: 'order',
    loadChildren: () => import('./features/order/order-module').then((m) => m.OrderModule), // Lazy loading
  },
  { path: '**', redirectTo: '/main' },
];
