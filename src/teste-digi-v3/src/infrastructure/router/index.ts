import { Router } from 'express';
import * as controllers from '../../controllers';

export const ApiRouter = (
    productController: controllers.ProductController
): Router => {
    const ApiRouter = Router();

    ApiRouter.get('/api/product/getAll', productController.getAll)

    return ApiRouter;
}