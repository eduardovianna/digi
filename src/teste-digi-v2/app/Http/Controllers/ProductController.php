<?php

namespace App\Http\Controllers;

use App\Repository\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/product/getAll",
     *      tags={"Product"},
     *      summary="Lista de produtos",
     *      description="Retorna a lista de produtos oriunda do arquivo JSON",
     *      @OA\Response(
     *          response=200,
     *          description="Solicitacão efetuada com sucesso"
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Erro interno do servidor"
     *      )
     *    )
     * 
     * Retorna a lista de produtos oriunda do Json
     */
    public function getAll()
    {
        $repository = new ProductRepository();

        $products = $repository->getProducts();

        return response()->json($products);
    }
}
