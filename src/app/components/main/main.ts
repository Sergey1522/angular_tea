import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements AfterViewInit, OnInit {
  private observable: Observable<void>;

  constructor(private router: Router) {
    this.observable = new Observable((param) => {
      setTimeout(() => {
        param.next(this.showPopup());
      }, 10000);
    });
  }

  @ViewChild('carousel') carousel!: ElementRef;

  ngOnInit(): void {
    this.observable.subscribe(this.showPopup);
  }

  ngAfterViewInit() {
    if ($ && $.ui && (window as any).jQuery.ui.accordion) {
      $('#accordion').accordion({
        collapsible: true,
        heightStyle: 'content',
      });
    }
  }

  showPopup() {
    const bootstrap = (window as any).bootstrap;

    if (!bootstrap) {
      console.error('Bootstrap не загружен!');
      return;
    }
    const toastElement = document.getElementById('teaToast');
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }
}
