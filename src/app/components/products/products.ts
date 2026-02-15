import { ProductsService } from '../../services/products-service';
import { Component, OnInit } from '@angular/core';
import { ProductsType } from '../../types/products-type';
import { DescriptionCropPipe } from '../../pipes/description-crop-pipe';
import { RubleCurrencyPipe } from '../../pipes/ruble-currency-pipe';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, Product, DescriptionCropPipe, RubleCurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  products: ProductsType[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['']);
      },
    });
  }

  cardProduct(): void {
    this.router.navigate(['product']);
  }
}
