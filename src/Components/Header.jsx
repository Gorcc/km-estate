import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Assets/logobig.png"
import "../Styles/Header.scss"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand href="/"><img className='header-logo' src={Logo} alt="" /></Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Use "ms-auto" to push the nav items to the right */}
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {/* Projects dropdown */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
