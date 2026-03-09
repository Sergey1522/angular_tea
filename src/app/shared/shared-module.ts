import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main } from '../features/main/main';
import { Products } from '../features/products/products/products';
import { Product } from '../features/products/product/product';
import { Order } from '../features/order/order';
import { RouterModule } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DescriptionCropPipe } from './pipes/description-crop-pipe';
import { RubleCurrencyPipe } from './pipes/ruble-currency-pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Header,
    Footer,
    Main,
    DescriptionCropPipe,
    RubleCurrencyPipe,
  ],
  exports: [CommonModule, RouterModule, Header, Footer, DescriptionCropPipe, RubleCurrencyPipe],
})
export class SharedModule {}
