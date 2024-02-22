"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Box from "../components/Box";
import products from "../../../products.json";

export default function Home() {

  const router = useRouter();

  function getCartList() {
    let productsList = [{}];
    products.map((item) => {
        const qty = localStorage.getItem(item.name);
        if(qty) {
            const product =  {
                name: item.name,
                quantity: parseInt(qty),
                subtotal: parseFloat(qty) * parseFloat(item.price),
            };
            const list = productsList.push(product);
        }
    });
    return productsList;
  }

  function goToCart() {
    localStorage.setItem("cartList", JSON.stringify(getCartList()));
    router.push('/cart');
  }
  return (
    <main >
      <nav className="nav">Loja Virtual</nav>
      <div className="btndiv" >
          <button className="btnCart" onClick={() => goToCart()} >
            Ir para carrinho <FontAwesomeIcon icon={faCartShopping} />
          </button>
      </div>
      <hr/>
      <div className="title">Produtos disponíveis</div>
      <hr />
      <div className="display">
        {products.map((item, index) => (
          <div key={index} className="divbox">
            <Box productName={item.name} 
              detail={item.detail}
              price={item.price}
              imageLink={item.image}
              info={item.info}
              offer={item.offer}
              hero={item.hero}
         />    
          </div>
        ))}
      </div>
    </main>
  );
}
