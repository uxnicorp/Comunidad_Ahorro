import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { gsap } from 'gsap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const RuedaInteractiva = () => {
  const ruedaRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Solo 3 iconos como solicitaste
  const iconos = [
    'bi bi-phone',      // Ícono 1
    'bi bi-tools',      // Ícono 2 (repetido)
    'bi bi-chat-dots'       // Ícono 3 (repetido)
  ];

  const girarRueda = () => {
    // Animación de giro suave
    gsap.to(ruedaRef.current, {
      rotation: '+=360',
      duration: 5,
      ease: 'power2.out'
    });
  };

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Columna izquierda - Rueda de iconos */}
        <Col md={6} className="text-center">
          <div
            ref={ruedaRef}
            style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              margin: '0 auto',
              borderRadius: '50%',
              border: '2px dashed rgba(2, 21, 129, 0.34)'
            }}
          >
            {iconos.map((icono, index) => {
              const angle = (index * (360 / iconos.length)) * (Math.PI / 180);
              const radius = 120;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <i
                  key={index}
                  className={`${icono} rueda-icono`}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    fontSize: '2.5rem',
                    color: '#495057', // Color gris oscuro uniforme
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    zIndex: 10
                  }}
                />
              );
            })}

            {/* Círculo central */}
            <div style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#f8f9fa',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #dee2e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5
            }}>
              <i className="bi bi-apple" style={{ fontSize: '1.5rem', color: '#6c757d' }} />
            </div>
          </div>

          {/* Botón para girar */}
          <Button
            variant="outline-dark"
            className="mt-3"
            onClick={girarRueda}
          >
            <i className="bi bi-arrow-repeat"></i>
          </Button>
        </Col>

        {/* Columna derecha - Texto minimalista */}
        <Col md={6}>
          <Card
            className={`bg-transparent border-0  border-secondary border-3 rounded-0 ${isHovered ? 'shadow' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card.Body>
              <h2 className="text-secondary mb-4">Nuestros Servicios</h2>

              {/* Lista de servicios con iconos */}
              <ul className="list-unstyled">
                {/* Servicio 1 */}
                <li className="mb-3 d-flex align-items-start">
                  <div className="me-3 text-primary">
                    <i className="bi bi-phone" style={{ fontSize: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Entrega de Dispositivo</h4>
                    <p className="text-muted small mb-0">
                      
                        Entrega express en 24/48 horas con garantía incluida
                     
                    </p>

                  </div>
                </li>

                {/* Servicio 2 */}
                <li className="mb-3 d-flex align-items-start">
                  <div className="me-3 text-primary">
                    <i className="bi bi-tools" style={{ fontSize: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Servicio Técnico</h4>
                    <p className="text-muted  mb-0">
                    
                        Reparaciones especializadas con técnicos certificados
                      

                    </p>
                  </div>
                </li>

                {/* Servicio 3 */}
                <li className="d-flex align-items-start">
                  <div className="me-3 text-primary">
                    <i className="bi bi-chat-dots" style={{ fontSize: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Asesoramiento Gratuito</h4>
                    <p className="text-muted small  mb-0">
                      
                        Consultas ilimitadas con nuestros expertos
                      
                    </p>

                  </div>
                </li>
              </ul>

              {/* Nota adicional */}
              <div className="mt-4 pt-2 border-top">
                <p className="small text-muted mb-0">
                  <i className="bi bi-stars me-2"></i>
                  Todos los servicios incluyen garantía de satisfacción
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RuedaInteractiva;