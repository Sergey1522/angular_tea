import { Component, effect, Input, OnInit, signal } from '@angular/core';
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
  // @Input() product: ProductsType;
  product = signal<ProductsType>({
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: '',
  });
  loading = signal<boolean>(true);
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    effect(() => {
      const currentProduct = this.product();
      if (currentProduct.id !== 0) {
        console.log('Товар загружен:', currentProduct.title);
      }
    });
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((param) => {
      if (param['id']) {
        this.loadProduct(param['id']);
      }
    });
  }

  private loadProduct(id: number): void {
    this.loading.set(true);
    this.productsService.getProduct(id).subscribe({
      next: (data) => {
        console.log('📦 Получены данные:', data);
        // Обновляем сигнал с данными продукта
        this.product.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['']);
      },
    });
  }

  addToCard() {
    this.productsService.product = this.product().title;
    this.router.navigate(['/order'], {
      queryParams: {
        product: this.product().title,
      },
    });
  }
}
