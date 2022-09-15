import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbarLightMode';
import Title from './components/Text/title';
import ItemListContainer from './container/itemlistcontainger';
import { useEffect, useState } from 'react';

const App = () => {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])

  useEffect(() => {
    console.log("holii");    
    fetch('')
    .then(response=> response.JSON())
    .then(data => {
      console.log(data.results);
      setProductos(data.results);
    })
  }, [])

  console.log(productos)
  console.log("Me estoy por renderizar");

  return (
    <div className="App" style={{ fontSize: '20px', borderBotton: "1px solid red" }}>
      <NavBar carritoLenght={carrito.length} />
      <div>
        <h3>Pelota de fútbol nike n°5</h3>
        <div>
          <button onClick={() => setCarrito([...carrito, "Pelota nike"])}>
            Agregar al carrito
          </button>
        </div>
      </div>
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
