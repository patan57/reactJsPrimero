const ItemListContainer = (greeting) => {
    console.log(greeting);
    return( 
    <div>
        <h4 style={{borderStyle: greeting.borderStyle}}></h4>
    </div>
    )
}

export default ItemListContainer;