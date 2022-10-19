import './App.css';
import NavBar from './components/navbar';
import Title from './components/Title';
import ItemListContainer from './components/ItemListContainer/index.jsx';
import {useState, useEffect} from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/index.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';

const App = ({textoDeBusqueda}) => {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])

  const categorias = ['Zapatillas', 'Remeras', 'Camperas'];
  
  const buscarProductos = async () => {
    try{
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${textoDeBusqueda}`)
      const data = await response.json();
      setProductos(data.results);
      // console.log(e);
    }catch(e){
    }
  }
  useEffect(() => {
    buscarProductos()
  }, [textoDeBusqueda])

  console.log(productos)
  console.log("Me estoy por renderizar");

  return (
    <>
    <BrowserRouter>
      <NavBar carritoLenght={carrito.length} categorias={categorias} />
      <Routes>
        <div className="App" style={{ fontSize: '20px', borderBotton: "1px solid red" }}>
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
      
      <Route path='/' element= {<ItemListContainer borderStyle="solid" />} />
      <Route path='/categoria/:categoriaId' element={<ItemDetailContainer />} />
        <h4>Articulos deportivos importados</h4>

      <header className="App-header">
        <Title msj="Esto es un ecommerce" color="green">
          <h2>Envíos a domicilio para todo el país</h2>
        </Title>
        <Title msj="12 cuotas sin interés" color="red" />
        <Title msj="Con todas las tarjetas de crédito" color="orange" />
        <ButtonComponent />
      </header>
        </div>
      <Route path='/' element= {<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
    );
}

const ButtonComponent = () => {
  return <button onClick={() => { alert("hola!") }}>Hola mundo</button>
}

export default App;
