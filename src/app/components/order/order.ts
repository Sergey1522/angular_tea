import { OrderType } from './../../types/order-type';
import { IMaskDirective } from 'angular-imask';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order',
  imports: [FormsModule, IMaskDirective, ReactiveFormsModule, CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {
  orderForm: FormGroup;
  showSuccessMessage = false;

  constructor(
    private productsServise: ProductsService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.orderForm = this.fb.group({
      product: [{ value: '', disabled: 'true' }],
      comment: [''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)]],
      country: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s\-\/]+$/)]],
    });
  }

  phoneMask = {
    mask: '+{7} (000) 000-00-00',
    lazy: false,
    placeholderChar: '_',
  };

  ngOnInit(): void {
    if (this.productsServise.product) {
      console.log(this.productsServise.product);
      this.orderForm.patchValue({
        product: this.productsServise.product,
      });
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.orderForm.get(controlName);
    return !!(control && control.touched && control.errors?.[errorName]);
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      const formValue = this.orderForm.getRawValue();
      const order: OrderType = {
        name: formValue.name,
        last_name: formValue.lastName,
        phone: formValue.phone,
        country: formValue.country,
        zip: formValue.zip,
        product: formValue.product,
        address: formValue.address,
        comment: formValue.comment,
      };
      console.log('Форма отправлена:', order);

      this.productsServise.createOrder(order).subscribe({
        next: (response) => {
          console.log('Заказ успешно создан:', response);
          this.orderForm.reset();
          this.showSuccessMessage = true;
        },
        error: (error) => {
          console.error('Ошибка при создании заказа:', error);
        },
      });
    } else {
      console.log('Форма не валидна');
    }
  }

  createNewOrder(): void {
    this.router.navigate(['/products']);
  }
}
