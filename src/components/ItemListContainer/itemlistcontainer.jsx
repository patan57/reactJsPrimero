import ItemCount from "./ItemCount";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd =(cantidades) => {
        console.log(`Estás por comprar ${cantidades} unidades`);
    }

    return( 
    <div>
        <h4 style={{borderStyle: greeting.borderStyle}}></h4>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
    )
}

export default ItemListContainer;