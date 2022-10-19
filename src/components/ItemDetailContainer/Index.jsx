import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/index.jsx";

const calzado = { id: 1, image: "../img/airJordan6.png", title:"Air Jordan 6 Retro"};

export const ItemDetailContainer = () => { 
    const[data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(calzado);
            },2000);
        });
        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;