import ItemCount from '../ItemCount';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title';


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

    const onAdd = (quantity) => {
        console.log(`Estás por comprar ${quantity} unidades`);
    }

    return( 
    <>
    <div>
        <Title />
        <h4 style={{borderStyle: texto.borderStyle}}></h4>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
    </>
    );
}

export default ItemListContainer;