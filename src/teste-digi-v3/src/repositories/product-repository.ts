import { ProductData } from '../data/product-data';

export class ProductRepository {
    constructor(private productData: ProductData) {}

    async getAll() {
        return this.productData.getProducts;
    }
}