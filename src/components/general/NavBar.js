import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
    return (
        <div className="Navbar shadow-sm">
            <Navbar style={{ "background-color": "#500000" }} collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        HOME
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;