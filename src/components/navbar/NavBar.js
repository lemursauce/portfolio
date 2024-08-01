import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.scss";

function NavBar() {
    return (
        <div className="Navbar">
            <Navbar style={{ "backgroundColor": "var(--primaryColor)" }} collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        LOGAN CARBO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;