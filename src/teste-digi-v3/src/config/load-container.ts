import { asClass, createContainer } from "awilix";

import * as services from "../services";
import * as repositories from "../repositories";
import * as data from "../data";
import { Application } from "express";
import { scopePerRequest } from "awilix-express";

export const loadContainer = (app: Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    })

    container.register({
        productService: asClass(services.ProductService).singleton(),
        productRepository: asClass(repositories.ProductRepository).singleton(),
        productData: asClass(data.ProductData).singleton()
    })

    app.use(scopePerRequest(container))
}
