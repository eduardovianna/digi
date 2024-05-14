<?php

namespace App\Repository;

use App\Models\Product;
use Illuminate\Support\Facades\File;

class ProductRepository
{
    private $product;

    public function __construct()
    {
        $content = File::json(base_path('app\Data\products.json'));
        $this->product = Product::hydrate($content);
    }

    public function getProducts() {
        return $this->product->all();
    }
}
