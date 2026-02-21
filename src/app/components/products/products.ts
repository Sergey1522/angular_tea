import { ProductsService } from '../../services/products-service';
import { Component, effect, OnInit, signal } from '@angular/core';
import { ProductsType } from '../../types/products-type';
import { DescriptionCropPipe } from '../../pipes/description-crop-pipe';
import { RubleCurrencyPipe } from '../../pipes/ruble-currency-pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, DescriptionCropPipe, RubleCurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  // products: ProductsType[] = [];
  products = signal<ProductsType[]>([]);

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private rout: ActivatedRoute,
  ) {
    effect(() => {
      console.log('🔄 Продукты обновлены:', this.products());
    });
  }

  ngOnInit(): void {
    this.rout.data.subscribe((data) => {
      this.products.set(data['products']);
    });
    // this.productsService.getProducts().subscribe({
    //   next: (data) => {
    //     this.products = data;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //     this.router.navigate(['']);
    //   },
    // });
  }
}
