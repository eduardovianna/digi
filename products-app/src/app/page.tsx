"use client"

import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Box from "../components/Box";
import products from "../../../products.json"

interface IProduct {
  name: string;
  detail: string;
  price: number;
  hero?: string;
  info?: string;
  offer?: string;
  image: string;
}

interface IShoppingCartItem {
  product: IProduct;
  quantity: number;
}

export default function Home() {

  const router = useRouter();

  const [data, setData] = useState(products);

  return (
    <main >
      <nav className="nav">Loja Virtual</nav>
      <div className="btndiv" >
          <button className="btnCart" onClick={() => router.push('/cart')} >
            Ir para carrinho <FontAwesomeIcon icon={faCartShopping} />
          </button>
      </div>
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
