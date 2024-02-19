import Image from "next/image";
import Box from "../components/Box";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
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
