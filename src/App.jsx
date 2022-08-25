import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbarLightMode';
import Title from './components/Text/title';

const App = () => {
  const persona = { nombre: "Mauro", altura: "170"};
  return (
    <div className="App" style={{fontSize: '20px', borderBotton: "1px solid red"}}>
      <NavBar />
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
  return <button onClick={() => {alert("hola!")}}>Hola mundo</button>
}

export default App;
