import { Component, OnInit } from '@angular/core';
import { groupBy } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  noImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.loadCart();
  }

  removeItem(cart: any) {
    this.cartService.removeProduct(cart.name);
    this.cartService.getCountCart();
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item removido com sucesso no carrinho",
      showConfirmButton: false,
      timer: 1500
    });

    this.loadCart();
  }

  //private METHODS
  private loadCart() {
    const cart = this.cartService.getResumed();

    this.cartItems = cart;
  }
}
