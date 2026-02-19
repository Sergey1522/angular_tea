import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { ProductsType } from '../../types/products-type';
import { RubleCurrencyPipe } from '../../pipes/ruble-currency-pipe';

@Component({
  selector: 'app-product',
  imports: [RubleCurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  @Input() product: ProductsType;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    };
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((param) => {
      if (param['id']) {
        this.productsService.getProduct(param['id']).subscribe({
          next: (data) => {
            console.log(data);
            this.product = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['']);
          },
        });
      }
    });
  }

  addToCard() {
    this.productsService.product = this.product.title;
    this.router.navigate(['/order']);
  }
}
