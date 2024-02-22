"use client"

import React, {useState, useEffect} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import "../styles/box.css";

export default function Box(props) {

    const {productName, detail, price, imageLink, hero, info, offer} = props;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const qty = localStorage.getItem(productName);
        if(qty) {
            setCount(parseInt(qty));
        }
        else {setCount(0);}
    }, [])

    const addItem = () => {
        setCount(count + 1);
        localStorage.removeItem(productName);
        localStorage.setItem(productName, count + 1);
    }

    const removeItem = () => {
        if(count > 0) {
            setCount(count - 1);
            localStorage.removeItem(productName);
            localStorage.setItem(productName, count - 1);
        }
    }

    return (
        <div className="box">
            <div className="title">
                {productName}
            </div>
            <hr className="bar"/>
            <div className="imgBox">
                <img className="img" src={imageLink} alt="" />
            </div>
            <hr className="bar"/>
            <div>
                {detail}
            </div>
            <div>
                <b>R$ </b> {price}
            </div>
            {info && <div>{info}</div>}
            {hero && <div>{hero}</div>}
            {offer && <div>{offer}</div>}
            <hr />
            <div><b>Quantidade:</b></div>
            <div className="rowButtons">
                <button className="cartButton" onClick={removeItem} >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <div className="numberBox">
                    {count}
                </div>
                <button className="cartButton" onClick={addItem} >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div>
                <p><b>Total do produto: </b>R$ {count*price}</p>
            </div>
            
            
        </div>
    )
}