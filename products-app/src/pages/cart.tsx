import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../styles/cart.css";
import "../styles/globals.css";
import products from "../../../products.json";

const inter = Inter({ subsets: ["latin"] });

interface IShopCartItem {
    name: string;
    quantity: number;
    subtotal: number;
}

export default function Cart() {

    const router = useRouter();
    const [productsList, setProductsList] = useState<IShopCartItem[]>(() => []);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        setProductsList(JSON.parse(localStorage.getItem("cartList") as string));
    }, [])
    
    function getTotalPrice() {
        let total = 0;
        if(productsList.length > 0) {
            productsList.map((item) => {
                if(item.quantity > 0) {
                    total = total + item.subtotal;
                }
            })
        }
        return total;
    }
     
    return (
        <div className={inter.className}>
            <nav className="nav">Loja Virtual</nav>
            <div className="shop">
                <div className="title">Meu Carrinho</div>
                <hr />
                <br />
                <div>
                    <button className="btnBack" onClick={() => router.push('/')} >
                        Voltar <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <br />
                <hr />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="tableHead" >Produto</th>
                                <th className="tableHead" >Quantidade</th>
                                <th className="tableHead" >Subtotal (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {productsList.map((item: IShopCartItem, index: number) => (
                            item.quantity > 0 ? 
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-50' }`}> 
                                <td className="text-sm text-center p-2" >{item.name}</td>
		                        <td className="text-sm text-center p-2" >{item.quantity}</td>
                                <td className="text-sm text-center p-2" >{item.subtotal}</td>
                            </tr> : null
                        ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <hr/>
                <br/>
                <div className="totalBox">
                    TOTAL A PAGAR: R$ {getTotalPrice()}
                </div>

            </div>  
        </div>
    )
}