import React from 'react'
import { Button, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/Logo1_Black-removebg-preview.png';
import Logo1 from '../../assets/logo2sf.png';

import swal from 'sweetalert2';

export const Footer = () => {



  const ir_404 = (e) => {
    e.preventDefault();
    swal("Error 404", "Pagina destino no encontrada", "error");
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div>
      <footer className='p-3 rounded fondo_nav_footer mt-3 text-white'>
        <Container>
          <div className='d-flex justify-content-center align-items-center p-sm-4 mb-1'>
            <img className="logo" style={{ width: '250px' }} src={Logo} alt="Logo" />
          </div>

          <Row className="justify-content-center">

            <Col md={4} className="text-center">
              <h4 className='text-uppercase mb-0'>Nuestras Redes</h4>

              <ul className='list-inline mt-3'>
                <li className="list-inline-item m-3">
                  <h3>
                    <a href="" className='text-light'>
                      <i className="bi bi-instagram" onClick={() => window.open('https://www.instagram.com/comunidadahorro_/', '_blank')}> </i>
                    </a>
                  </h3>

                </li>
                <li className="list-inline-item m-3">
                  <h3>
                    <a href="" className='text-light'>
                      <i className="bi bi-facebook" onClick={() => window.open('https://www.facebook.com/profile.php?id=61573652831931&ref=pro_upsell_xav_ig_profile_page_web', '_blank')}> </i>
                    </a>
                  </h3>
                </li>
                <li className="list-inline-item m-3">
                  <h3>
                    <a href="" className='text-light'>
                      <i className="bi bi-whatsapp" onClick={() => window.open('https://wa.me/5493854178021?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20iPhone', '_blank')} > </i>
                    </a>
                  </h3>
                </li>

              </ul>

               
                    <i className="bi bi-geo-alt">  Patagonia 695, Santiago del Estero, Argentina</i>
                



            </Col>

            <Col md={4} className="text-center text-md-start mb-3 mb-md-0">

              <h4 className='text-uppercase text-center'>Comunidad Ahorro</h4>

              <p className='text-center'>
                <span className="text-info text-shadow">Tu nuevo iPhone </span>
                está más cerca de lo que creés.
              </p>

              <div className='text-center'>
                <Button
                  variant="outline-light"
                  className="rounded-pill"
                  onClick={() => window.open('https://wa.me/5493854178021?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20iPhone', '_blank')}>
                  Contáctanos
                </Button>
              </div>







            </Col>

            <Col md={4} className="text-center mb-3 mb-md-0">
              <h4 className='text-uppercase'>¿Te gustó algo de lo que viste?</h4>
              <div className='d-flex justify-content-center align-items-center'>
                <Nav>
                  <ul>
                    <li> <Nav.Link onClick={() => scrollToSection('tienda')} className="me-4 text-light">  Tienda</Nav.Link></li>
                    <li> <Nav.Link onClick={() => scrollToSection('accesorios')} className="me-4 text-light">  Accesorio</Nav.Link></li>
                    <li> <Nav.Link onClick={() => scrollToSection('servicios')} className="me-4 text-light">  Servicios</Nav.Link></li>
                  </ul>
                </Nav>
              </div>
            </Col>


          </Row>
          <hr></hr>
          <div className="text-white rounded d-flex justify-content-center align-items-center">
            <p> Todos los derechos reservados. 2025 <b>Comunidad Ahorro &copy;</b></p>
          </div>
        </Container>
      </footer>

    </div>
  )
}
