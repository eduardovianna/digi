"use client"

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Box from "../components/Box";

export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <button className="btnCart" onClick={() => router.push('/cart')} >
            Ir para carrinho <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
        <Box productName="Product 10" 
            detail="Lorem ipsum dolor sit amet"
            price="99"
            imageLink="/vercel.svg"
            info="This is the latest and greatest product from Derp corp."
            offer="BOGOF"
            hero="No srsly GTFO"
         />
      </div>
    </main>
  );
}
