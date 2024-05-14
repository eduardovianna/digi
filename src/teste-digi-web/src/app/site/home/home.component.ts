import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService) {}
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  setProductToCart(product: any) {
    try {
      this.cartService.addProduct(product);
      this.cartService.getCountCart();
    } catch(err) {
      alert('Ocorreu um erro ao processar a solicitação')
    }
  }

  // private METHODS
  private getAllProducts() {
    this.productService.getAll().subscribe({
      next: (products) => this.products = products,
      error: (error) => alert(error)
    })
  }
}
