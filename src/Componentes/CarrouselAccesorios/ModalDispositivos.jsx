import React from 'react';
import { Modal, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import cam11 from '../../assets/cam-11.jpeg';
import cam13 from '../../assets/cam-13-14.jpeg';
import cam13pm from '../../assets/cam-13-pm.jpeg';
import cam14 from '../../assets/cam-13-14.jpeg';
import cam16 from '../../assets/cam-16.jpeg';
import pant from '../../assets/pantalla.jpeg';
import bat from '../../assets/bateria.jpeg';
import { BiCheckCircle } from 'react-icons/bi';

const ModalDispo = ({ show, handleClose, product }) => {
  if (!product) return null;

  // Función para obtener la imagen correcta según el producto
  const getCameraImage = (productId) => {
    // Puedes mapear diferentes imágenes para cada producto
    const cameraImages = {
      1: cam11, // iPhone 11
      2: cam13,
      3: cam13pm,
      4: cam14,
      5: cam16
    };
    return cameraImages[productId] || cam11; // Imagen por defecto
  };
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered className="product-modal">
      <Modal.Header className="border-0 pb-0">
        <Modal.Title className="w-100 text-center">
          <h2 className="mb-1">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <Badge bg="info" className='rounded-pill p-3 mb-5 shadow'

          >{product.price}</Badge>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0">

        <Container>

          {/* Sección Pantalla */}
          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="text-center">
                <img
                  src={pant}
                  alt="Pantalla"
                  className="img-fluid rounded  border border-primary rounded-pill"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3 className="mb-3" style={{ color: '#4a5568' }}>{product.pantalla}</h3>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det_pant}</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det2_pant}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Sección Cámara - Invertido para pantallas grandes */}
          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="text-center">
                <img
                  src={getCameraImage(product.id)}
                  alt="Cámara"
                  className="img-fluid rounded border border-primary rounded-pill"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3 className="mb-3" style={{ color: '#4a5568' }}>{product.camara}</h3>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det_cam}</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det2_cam}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Sección Batería */}
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="text-center">
                <img
                  src={bat}
                  alt="Batería"
                  className="img-fluid rounded border border-primary rounded-pill"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3 className="mb-3" style={{ color: '#4a5568' }}>{product.bateria}</h3>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det_bat}</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <BiCheckCircle className="text-primary me-2 mt-1" />
                    <span>{product.det2_bat}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

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
            background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 25%, #2E5BBA 50%, #1E3A8A 75%, #1E293B 100%)',
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

export default ModalDispo;