import { Request, Response } from "express";
import { ProductService } from "../../services/product-service";
import { GET, route } from "awilix-express";
import { controller, httpGet } from "inversify-express-utils";
import { ApiOperationGet, ApiPath, SwaggerDefinitionConstant } from "swagger-express-ts";
import { IController } from "../icontroller";

@ApiPath({
    path: "/api/product/getAll",
    name: "Product"
})
@route('/api/product')
@controller('/product')
export class ProductGetAllController implements IController {
    private readonly productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    public static TARGET_NAME: string = "ProductGetAllController";

    @ApiOperationGet({
        description: "Obtém a lista de produtos oriunda do arquivo JSON",
        summary: "Listar Produtos",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY }
        }
    })
    @httpGet('/getAll')
    @route('/getAll')
    @GET()
    async invoke(req: Request, res: Response) : Promise<Response> {
        return res.json(await this.productService.getAll());
    }
}