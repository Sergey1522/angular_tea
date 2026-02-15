import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsType } from '../../types/products-type';
import { DescriptionCropPipe } from '../../pipes/description-crop-pipe';
import { RubleCurrencyPipe } from '../../pipes/ruble-currency-pipe';
import { data } from 'jquery';

@Component({
  selector: 'app-product',
  imports: [DescriptionCropPipe, RubleCurrencyPipe, RouterLink],
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
}
