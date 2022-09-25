import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/cartWidget";
import "./navbarLightMode.css";

function NavBar({ carritoLenght, categorias }) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar
                        <div>Tenes {carritoLenght} productos en el carrito</div>
                        <div>
                            <CartWidget float="right" />
                        </div>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <div>
                            <ul>
                                {categorias.map(categoria => {
                                return <ItemNav nombre={categoria} />
                                })}
                            </ul>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

const ItemNav = () => {
    return <li>nombre</li>
}

export default NavBar;
