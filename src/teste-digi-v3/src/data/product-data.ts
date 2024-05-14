import productData from '../products.json';

export class ProductData{
    private _products: any[] = [];

    constructor() {
        this._products = productData
    }

    get getProducts() { return this._products };
    
}