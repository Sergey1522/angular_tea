import { ProductsService } from '../services/products-service';
import { Component, effect, OnInit, signal } from '@angular/core';
import { ProductsType } from '../../../types/products-type';
import { DescriptionCropPipe } from '../../../shared/pipes/description-crop-pipe';
import { RubleCurrencyPipe } from '../../../shared/pipes/ruble-currency-pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DescriptionCropPipe, RubleCurrencyPipe, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  // products: ProductsType[] = [];
  products = signal<ProductsType[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private rout: ActivatedRoute,
  ) {
    effect(() => {
      console.log('🔄 Продукты обновлены:', this.products());
    });
  }

  // ngOnInit(): void {
  //   this.rout.data.subscribe((data) => {
  //     this.products.set(data['products']);
  //   });
  //   // this.productsService.getProducts().subscribe({
  //   //   next: (data) => {
  //   //     this.products = data;
  //   //   },
  //   //   error: (error) => {
  //   //     console.log(error);
  //   //     this.router.navigate(['']);
  //   //   },
  //   // });
  // }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);

    console.log('📡 Загружаем продукты...');

    this.productsService.getProducts().subscribe({
      next: (data) => {
        console.log('✅ Продукты загружены:', data);
        this.products.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('❌ Ошибка загрузки:', error);
        this.error.set('Не удалось загрузить продукты');
        this.loading.set(false);
      },
    });
  }
  goToProduct(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

  retry(): void {
    this.loadProducts();
  }
}
