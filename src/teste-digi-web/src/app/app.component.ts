import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Teste Digi';
  cartCount: number = 0;

  constructor(
      private titleService: Title,
      private cartService: CartService) {
      this.titleService.setTitle(this.title);
    }
    ngOnInit(): void {
      this.loadCartCount()
      this.cartService.eventGetCart.subscribe((products: any[]) => {
        this.cartCount = products.length;
      });
    }

    // private METHODS
    private loadCartCount() {
    const products = this.cartService.getAll();
    this.cartCount = products.length;
  }
}
