import ItemCount from '../ItemCount';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title';
import ItemList from '../ItemList';

const calzado = [
    {id: 1, image:"../img/airJordan6.png", title:"Air Jordan 6 Retro"},
    {id: 2, image:"../img/airJordan7.png", title:"Air Jordan 7 Retro"},
    {id: 3, image:"../img/airMax90.png", title:"Air Max 90"},
    {id: 4, image:"../img/botasLebronIX.png", title:"Botas Lebron IX Total Orange"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(calzado);
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
        <ItemList data={data} />
    </div>
    </>
    );
}

export default ItemListContainer;