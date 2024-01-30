import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="mb-2">
          {/* Left side */}
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-md-0 mb-2 text-center">
            <div>
              <h5 className="mb-1">K/M Real Estate</h5>
              <p className="mb-0">Your modern real estate partner.</p>
            </div>
          </Col>

          {/* Middle side */}
          <Col xs={12} md={4} className="text-center d-flex align-items-center justify-content-center mb-md-0 mb-2">
            <p className="mb-0 rights">© {new Date().getFullYear()} K/M Real Estate. All rights reserved</p>
          </Col>

          {/* Right side */}
          <Col xs={12} md={4} className="text-right d-flex align-items-center">
            <p className="mb-1"></p>
          </Col>
        </Row>

        {/* Separator line */}
        <hr className="bg-light mb-2" />

        {/* Social icons */}
        <Row className="justify-content-center">
          <Col className="text-center">
            <a href="https://www.instagram.com/km_real_estates/" className="text-light mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
