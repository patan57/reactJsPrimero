import ItemCount from "./ItemCount";
import React from "react";


export const ItemListContainer = ({greeting}) => {
    console.log(greeting);

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