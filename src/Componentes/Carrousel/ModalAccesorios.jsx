import React from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';

const ModalAccesorios = ({ show, handleClose, product }) => {
  if (!product) return null;

  // Datos de características (puedes personalizarlos)
  const features = [
    {
      image: product.image,
      title: "Especificaciones Técnicas",
      items: [
        product.det1,
        product.det2,
        product.det3,
        product.det4
      ]
    },
  ];

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center h3">
          {product.name} - <span className="text-primary">{product.price}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Container>
          {/* Filas alternadas */}
          {features.map((feature, index) => (
            <Row 
              key={index} 
              className={`align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="text-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
              </Col>
              
              <Col lg={6}>
                <div className={`p-4 ${index % 2 !== 0 ? 'text-end' : 'text-start'}`}>
                  <h4 className="mb-3">{feature.title}</h4>
                  <ul className={`list-unstyled ${index % 2 !== 0 ? 'ps-0' : 'pe-0'}`}>
                    {feature.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center">
          <button
          onClick={handleClose}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #667eea',
            background: 'transparent',
            color: '#667eea',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#667eea';
          }}
        >
          Cerrar
        </button>

        <button
          onClick={() => window.open('https://wa.me/5493854178021?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20iPhone', '_blank')}
          style={{
            flex: 1,
            padding: '10px',
            border: 'none',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          Comprar Ahora
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAccesorios;