import ItemCount from "C:\Users\lobos\OneDrive\Escritorio\reactecommerce-app\src\components\ItemCount\ItemCount.jsx";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => res.filter());
        } else {
        getData.then(res => setData(res));
        }
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