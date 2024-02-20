import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {
    return (
        <div className={inter.className}>
            <h1>Meu Carrinho</h1>
            <div>
                <table>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}