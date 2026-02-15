import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { Product } from './components/product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Product, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tea-angular');
}
