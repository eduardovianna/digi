"use client"

import React, {useState} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import "../styles/box.css";

export default function Box(props) {

    const {productName, detail, price, imageLink, hero, info, offer} = props;

    const [count, setCount] = useState(0);

    const addItem = () => {
        setCount(count + 1);
    }

    const removeItem = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="box">
            <div className="title">
                {productName}
            </div>
            <hr className="bar"/>
            <Image
              src={imageLink}
              alt=""
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <hr className="bar"/>
            <div>
                {detail}
            </div>
            <div>
                <b>R$ </b> {price}
            </div>
            <div>
                {info}
            </div>
            <div>
                {hero}
            </div>
            <div>
                {offer}
            </div>
            <hr />
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
            
            
        </div>
    )
}