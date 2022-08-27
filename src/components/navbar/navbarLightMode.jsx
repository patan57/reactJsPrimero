    import Container from 'react-bootstrap/Container';
    import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget';
    import "./navbarLightMode.css";


    function NavBar() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src=""
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Falta Uno
                            <div>
                                <CartWidget float="right" />
                            </div>
                            
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }


    export default NavBar;
