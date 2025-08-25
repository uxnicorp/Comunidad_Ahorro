import React, { useState } from 'react';
import { Card , Col} from 'react-bootstrap';


const CustomAccordion = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const items = [
    "1. Tarjeta de crédito/débito",
    "2. Transferencia bancaria",
    "3. PayPal",
    "4. Criptomonedas",
    "5. Pago contra entrega"
  ];

  return (
    <Col lg={4} md={12} className='p-5'>
      <div className="position-relative">
        <Card
          className={`bg-transparent border-0 border-end border-primary border-3 rounded-0 ${isHovered ? 'shadow' : ''}`}
          style={{ 
            width: '18rem', 
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(5px)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Card.Body className="p-3">
            <Card.Title className="text-dark d-flex justify-content-between align-items-center">
              Métodos de pago
              <span className="accordion-arrow">
                {isExpanded ? '▲' : '▼'}
              </span>
            </Card.Title>
            
            {/* Contenido del acordeón */}
            <div 
              className="accordion-content"
              style={{
                maxHeight: isExpanded ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}
            >
              <ul className="list-unstyled mt-3">
                {items.map((item, index) => (
                  <li 
                    key={index}
                    className="py-2 text-dark"
                    style={{
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Estilos CSS */}
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
      `}</style>
    </Col>
  );
};

export default CustomAccordion;