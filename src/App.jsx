import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbarLightMode';
import Title from './components/Text/title';
import ItemListContainer from './container/itemlistcontainger';
import { useEffect, useState } from 'react';

const App = () => {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])

  const categorias = ['Zapatillas', 'Remeras', 'Camperas'];
  
  const buscarProductos = async () => {
    try{
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=`)
      const data = await response.json();
      setProductos(data.results);
      // console.log(e);
    }catch(e){
    }
  }
  useEffect(() => {
    buscarProductos()
  }, [])

  console.log(productos)
  console.log("Me estoy por renderizar");

  return (
    <div className="App" style={{ fontSize: '20px', borderBotton: "1px solid red" }}>
      <NavBar carritoLenght={carrito.length} categorias={categorias} />
      {productos.map((producto, index) =>{
        return(
          <div key={index}>
            <h3>{producto.Title}</h3>
            <img src={producto.thumbnail} alt="" />
            <div>
              <button onClick={() => setCarrito([...carrito, producto])}>
                Agregar al carrito
              </button>
            </div>
      </div>
        )
      })}
      
      <ItemListContainer borderStyle="solid">
        <h4>Articulos deportivos importados</h4>
      </ItemListContainer>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title msj="Esto es un ecommerce" color="green">
          <h2>Envíos a domicilio para todo el país</h2>
        </Title>
        <Title msj="12 cuotas sin interés" color="red" />
        <Title msj="Con todas las tarjetas de crédito" color="orange" />
        <ButtonComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button onClick={() => { alert("hola!") }}>Hola mundo</button>
}

export default App;
