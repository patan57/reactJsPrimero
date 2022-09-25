import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const detailItemImage = { id: 1, image: "C:\Users\lobos\OneDrive\Escritorio\reactecommerce-app\src\components\img\chuck taylor converse.png", title:"Chuck Taylor Converse"};

export const ItemDetailContainer = () => { 
    const[data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(detailItemImage);
            },2000);
        });
        getData.then(res => setData(res));
    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;