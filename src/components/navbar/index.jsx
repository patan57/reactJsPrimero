import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget";
import "./navBar.css";
import {NavLink} from 'react-router-dom';

export const NavBar = ({ carritoLenght, categorias }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink>
                        <Navbar.Brand href="#home">Navbar
                            <div>
                                Tenes {carritoLenght} productos en el carrito
                            </div>
                            <div>
                                <CartWidget float="right" />
                            </div>
                        </Navbar.Brand>
                    </NavLink>    
                    <Nav className="me-auto">
                        <NavLink>
                            <Nav.Link className="" to='/'>Home</Nav.Link>
                            <Nav.Link className="" to='/'>Features</Nav.Link>
                            <Nav.Link className="" to='/'>Pricing</Nav.Link>
                            <div>
                                <ul>
                                    {categorias.map(categoria => {
                                    return <ItemNav nombre={categoria} />
                                    })}
                                </ul>
                            </div>
                        </NavLink>
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
