import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  @Output() eventGetCart = new EventEmitter<any[]>();

  constructor() {
    if(sessionStorage.getItem('cart') !== undefined && sessionStorage.getItem('cart') !== null) {
      const json = sessionStorage.getItem('cart')!;
      this.cart = JSON.parse(json);
    }
   }

  addProduct(product: any): void {

    this.cart.push(
      {
        item: product.name,
        price: product.price,
        image: product.image
      }
    );
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeProduct(name: string): void {
    
    const cart = this.cart.filter(x => x.item != name);

    this.cart = cart;

    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCountCart() {
    this.eventGetCart.emit(this.getResumed());
  }

  getAll(): any[] {
    return this.cart;
  }

  getResumed(): any[] {
    const result: any[] = [];

    let groups = new Set(this.cart.map(c => c.item))
    groups.forEach(g => 
      result.push({
        name: g, 
        values: this.cart.filter(i => i.item === g)
      }
    ));

    return result;
  }
}
