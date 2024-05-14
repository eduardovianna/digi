import { ProductRepository } from "../repositories/product-repository";

export class ProductService {
    private readonly productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async getAll() {
        return this.productRepository.getAll();
    }
}