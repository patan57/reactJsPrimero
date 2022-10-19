import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(calzado => <Item key={calzado.id} info={calzado} />)
    );
}

export default ItemList;