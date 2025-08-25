import React from 'react'
import { Card, Accordion, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import CustomAccordion from './AcordeonPersonalizado';

export const Etiquetas = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);




    return (
        <div>
            <Container >
                <Row >
                    {/* Columna izquierda - Contenido de texto */}
                    <Col lg={4} md={12} className='p-5'>
                        <div className="position-relative">
                            <Card
                                className={`bg-transparent border-0 border-end border-primary border-3 rounded-0 ${isHovered ? 'shadow' : ''}`}
                                style={{ width: '18rem', transition: 'all 0.3s ease' }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Card.Body className="p-3">
                                    <Card.Title className="text-dark">
                                        <Accordion className='custom-accordion-item'>
                                            <Accordion.Item eventKey="0" className="bg-transparent border-0">
                                                <Accordion.Header>
                                                    <i className="bi bi-credit-card-2-back pe-4"> </i>
                                                    Metodos de pago
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ListGroup className='bg-transparent'>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                            <p className="text-muted small mb-0">
                                                                Efectivo
                                                            </p>

                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                                <p className="text-muted small mb-0">
                                                                En cuotas
                                                            </p>
                                                            
                                                            </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Tarjeta de credito
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Mercadopago
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                             <p className="text-muted small mb-0">
                                                                y mas...
                                                            </p>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    {/* Columna derecha - Imagen */}
                    <Col lg={4} md={12} className='p-5'>
                        <div className="position-relative">
                            <Card
                                className={`bg-transparent border-0 border-end border-primary border-3 rounded-0 ${isHovered2 ? 'shadow' : ''}`}
                                style={{ width: '18rem', transition: 'all 0.3s ease' }}
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                            >
                                <Card.Body className="p-3">
                                    <Card.Title className="text-dark">
                                        <Accordion className='custom-accordion-item'>
                                            <Accordion.Item eventKey="0" className="bg-transparent border-0">
                                                <Accordion.Header>
                                                    <i className="bi bi-truck pe-4"></i>
                                                    Entregas
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <ListGroup className='bg-transparent'>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                              <p className="text-muted small mb-0">
                                                                Santiago del estero Capital
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                              <p className="text-muted small mb-0">
                                                                Añatuya
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                              <p className="text-muted small mb-0">
                                                                Termas
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                              <p className="text-muted small mb-0">
                                                                Clodomira
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                             <p className="text-muted small mb-0">
                                                                y mas...
                                                            </p>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col lg={4} md={12} className='p-5'>
                        <div className="position-relative">


                            <Card
                                className={`bg-transparent border-0 border-end border-primary border-3 rounded-0 ${isHovered3 ? 'shadow' : ''}`}
                                style={{ width: '18rem', transition: 'all 0.3s ease' }}
                                onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)}
                            >
                                <Card.Body className="p-3">
                                    <Card.Title className="text-dark">
                                        <Accordion className='custom-accordion-item'>
                                            <Accordion.Item eventKey="0" className="bg-transparent border-0">
                                                <Accordion.Header>
                                                    <i className="bi bi-phone pe-4"></i>
                                                    + 300 Iphones entregados</Accordion.Header>
                                                <Accordion.Body>
                                                    <ListGroup className='bg-transparent'>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Iphone 11
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Ipphone 13
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Iphone 14 pro max
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                Iphone 16
                                                            </p>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='bg-transparent border-0 px-0'>
                                                               <p className="text-muted small mb-0">
                                                                y mas...
                                                            </p>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Title>
                                </Card.Body>
                            </Card>

                        </div>
                    </Col>
                </Row>

                {/* Estilos CSS actualizados */}
                <style jsx>{`
                  .accordion-arrow {
                    transition: transform 0.3s ease;
                    transform: rotate(${isExpanded ? '180deg' : '0deg'});
                  }
                  
                  .accordion-content {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 8px;
                    margin-top: 10px;
                  }
                  
                  li:hover {
                    background: rgba(13, 110, 253, 0.1);
                    padding-left: 10px;
                  }

                  /* Estilos para accordion transparente */
                  .custom-accordion-item .accordion-item {
                    background-color: transparent !important;
                    border: none !important;
                  }

                  .custom-accordion-item .accordion-button {
                    background-color: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    color: inherit !important;
                    padding: 0 !important;
                    font-size: 1.25rem;
                    font-weight: 500;
                  }

                  .custom-accordion-item .accordion-button:not(.collapsed) {
                    background-color: transparent !important;
                    color: inherit !important;
                    box-shadow: none !important;
                  }

                  .custom-accordion-item .accordion-button:focus {
                    box-shadow: none !important;
                    border-color: transparent !important;
                  }

                  .custom-accordion-item .accordion-button:hover {
                    background-color: transparent !important;
                  }

                  .custom-accordion-item .accordion-body {
                    background-color: transparent !important;
                    border: none !important;
                    padding: 10px 0 !important;
                  }

                  .custom-accordion-item .list-group-item {
                    background-color: transparent !important;
                    border: none !important;
                    color: inherit !important;
                    padding: 8px 0 !important;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
                  }

                  .custom-accordion-item .list-group-item:hover {
                    background-color: rgba(13, 110, 253, 0.1) !important;
                    padding-left: 10px !important;
                    transition: all 0.2s ease;
                  }

                  .custom-accordion-item .list-group-item:last-child {
                    border-bottom: none !important;
                  }
                `}</style>
            </Container>
        </div>
    )
}