import { Container, Navbar, Nav } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import "./navbar.scss";

function MyNavBar() {
    return (
        <div className="Navbar">
            <Navbar style={{ "backgroundColor": "var(--primaryColor)" }} collapseOnSelect expand="lg">
                <Container fluid>
                    <HashLink to="/" className="navbar-brand">
                        Logan Carbo
                    </HashLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <HashLink smooth to="/#Home" className="nav-link">Home</HashLink>
                            <HashLink smooth to="/#About" className="nav-link">About</HashLink>
                            <HashLink smooth to="/#Skills" className="nav-link">Skills</HashLink>
                            <HashLink smooth to="/#Projects" className="nav-link">Projects</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavBar;