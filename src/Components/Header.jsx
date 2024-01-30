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
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* Projects dropdown */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bahamas">Bahamas Homes</NavDropdown.Item>
              <NavDropdown.Item href="/mykanos">Mykanos Homes</NavDropdown.Item>
              <NavDropdown.Item href="/hawaii">Hawaii Homes</NavDropdown.Item>
              <NavDropdown.Item href="/moonlight">Moonlight Villas</NavDropdown.Item>
              <NavDropdown.Item href="/aloha">Aloha Beach Resort</NavDropdown.Item>
              <NavDropdown.Item href="/phuket">Phuket Health & Wellness Resort</NavDropdown.Item>
          
              <NavDropdown.Divider />
              <p className='text-center'>Completed Projects </p>
              <NavDropdown.Item href="/maldives">Maldives Homes</NavDropdown.Item>
              <NavDropdown.Item href="/idyll">IDYLL Homes</NavDropdown.Item>
              <NavDropdown.Item href="/pearl">Pearl Island</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
