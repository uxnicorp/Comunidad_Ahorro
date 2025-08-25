import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import item11 from '../../assets/iPhone11.jpeg';

import item13 from '../../assets/iphone-13.jpeg';
import item13pm from '../../assets/iphone-13-promax.jpeg';
import item14 from '../../assets/iphone-14.jpeg';
import item16 from '../../assets/iphone-16.jpeg';
import { BiSearch } from 'react-icons/bi';
import ModalDispo from './ModalDispositivos';
//carousel de dispositivos
const MultiCardCarousel = ({ searchTerm, searchedProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [highlightedProduct, setHighlightedProduct] = useState(null);

  // Estado para el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el modal
  const handleVerMas = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Datos de productos con palabras clave para búsqueda
  const products = [
    {
      id: 1,
      name: "iPhone 11",
      description: "El iPhone más avanzado con chip A17 Pro.",
      image: item11,
      price: "$1,199",

      pantalla: 'Pantalla Liquid Retina HD1',
      det_pant: '6.1″ pulgadas',
      det2_pant: 'Aluminio y vidrio',


      camara: 'Sistema de dos cámaras',
      det_cam: 'Cámara principal de 12 MP Ultra gran angular',
      det2_cam: 'Modo Retrato con Control de Profundidad',

      bateria: 'Batería de iones de litio recargable integrada',
      det_bat: 'Hasta 17 horas de reproducción de videos',
      det2_bat: 'Carga rápida, hasta un 50% de carga en 30 minutos',

      keywords: ["iphone11", "iphone 11", "apple", "11"],

    },
    {
      id: 2,
      name: "iPhone 13",
      description: "Smartphone premium con S Pen integrado, cámara de 200MP.",
      image: item13,
      price: "$1,299",

      pantalla: 'Pantalla Super Retina XDR',
      det_pant: '6.1″ pulgadas',
      det2_pant: 'Aluminio con parte posterior de vidrio',


      camara: 'Sistema de dos cámaras',
      det_cam: 'Cámara principal de 12 MP Ultra gran angular',
      det2_cam: 'Modo Retrato con Control de Enfoque y Control de Profundidad',

      bateria: 'Batería de iones de litio recargable integrada',
      det_bat: 'Hasta 19 horas de reproducción de videos',
      det2_bat: 'Carga rápida, hasta un 50% de carga en 30 minutos',

      keywords: ["iphone13", "iphone 13", "apple", "13"],

    },
    {
      id: 3,
      name: "iPhone 13 pro max",
      description: "Smartphone premium con S Pen integrado, cámara de 200MP.",
      image: item13pm,
      price: "$1,299",

      pantalla: 'Pantalla Super Retina XDR',
      det_pant: '6.7″ pulgadas Tecnología ProMotion',
      det2_pant: 'Acero inoxidable con parte posterior de vidrio mate texturizado',


      camara: 'Sistema de cámaras Pro',
      det_cam: 'Cámara principal de 12 MP Ultra gran angular Teleobjetivo',
      det2_cam: 'Modo Retrato con Control de Enfoque y Control de Profundidad',

      bateria: 'Batería de iones de litio recargable integrada',
      det_bat: 'Hasta 28 horas de reproducción de video',
      det2_bat: 'Carga rápida, hasta un 50% de carga en 35 minutos',


      keywords: ["iphone13 pro max", "iphone 13 pro max", "apple", "13 pro max", "pro max"],

    },
    {
      id: 4,
      name: "iPhone 14",
      description: "Smartphone premium con S Pen integrado, cámara de 200MP.",
      image: item14,
      price: "$1,299",

      pantalla: 'Pantalla Super Retina XDR',
      det_pant: '6.1″ pulgadas',
      det2_pant: 'Aluminio con parte posterior de vidrio',


      camara: 'Sistema de dos cámaras',
      det_cam: 'Cámara principal de 12 MP Ultra gran angular',
      det2_cam: 'Modo Retrato con Control de Enfoque y Control de Profundidad',

      bateria: 'Batería de iones de litio recargable integrada',
      det_bat: 'Hasta 20 horas de reproducción de videos',
      det2_bat: 'Carga rápida, hasta un 50% de carga en 30 minutos',

      keywords: ["iphone14", "iphone 14", "apple", "14"],
    
    },
    {
      id: 5,
      name: "iPhone 16",
      description: "Smartphone premium con S Pen integrado, cámara de 200MP.",
      image: item16,
      price: "$1,299",

       pantalla: 'Pantalla Super Retina XDR',
      det_pant: '6.1″ pulgadas',
      det2_pant: 'Aluminio con parte posterior de vidrio con infusión de color',


      camara: 'Sistema avanzado de dos cámaras',
      det_cam: 'Fusion de 48 MP Ultra gran angular de 12 MP',
      det2_cam: 'Fotos en superalta resolución (24 MP y 48 MP)',

      bateria: 'Batería de iones de litio recargable integrada',
      det_bat: 'Hasta 22 horas de reproducción de video',
      det2_bat: 'Carga rápida, hasta un 50% de carga en 30 minutos',

      keywords: ["iphone16", "iphone 16", "apple", "16"],
     
    }
  ];


  // Animar las tarjetas
  const animateCards = () => {
    const visibleIndices = getVisibleIndices();

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      card.style.transition = 'all 0.5s ease';

      if (visibleIndices.includes(index)) {
        const pos = visibleIndices.indexOf(index);
        const offset = (pos - 1) * 340; // 340px entre cada tarjeta
        card.style.transform = `translateX(${offset}px) scale(${pos === 1 ? 1.05 : 0.95})`;
        card.style.opacity = pos === 1 ? '1' : '0.8';
        card.style.zIndex = pos === 1 ? '20' : '10';
        card.style.filter = pos === 1 ? 'none' : 'brightness(0.95)';
      } else {
        card.style.transform = 'translateX(0) scale(0.8)';
        card.style.opacity = '0';
        card.style.zIndex = '1';
      }
    });
  };

  // Navegación
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Efecto para manejar búsquedas y resaltar productos
  useEffect(() => {
    if (searchedProduct) {
      const foundIndex = products.findIndex(p => p.id === searchedProduct.id);
      if (foundIndex !== -1) {
        // 1. Detener auto-rotación
        setHighlightedProduct(searchedProduct.id);

        // 2. Posicionar exactamente según el índice
        // iPhone 11 -> posición 0 (índice 0)
        // iPhone 13 -> posición 1 (índice 1)
        // iPhone 13 Pro Max -> posición 2 (índice 2)
        // etc...
        setCurrentIndex(foundIndex); // Usamos el índice directo del producto

        // 3. Forzar redibujado inmediato (opcional)
        requestAnimationFrame(() => {
          animateCards();
        });

        // 4. Quitar resaltado después de 3s
        const timer = setTimeout(() => {
          setHighlightedProduct(null);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [searchedProduct]);

  // Obtener índices de las tarjetas visibles
  const getVisibleIndices = () => {
    // Siempre muestra [currentIndex-1, currentIndex, currentIndex+1]
    return [
      (currentIndex - 1 + products.length) % products.length, // izquierda
      currentIndex,                                           // centro (producto buscado)
      (currentIndex + 1) % products.length                    // derecha
    ];
  };


  // Efecto para animar las tarjetas cuando cambia currentIndex
  useEffect(() => {
    animateCards();
  }, [currentIndex]);

  // Auto-rotación del carrusel (pausar cuando hay un producto resaltado)
  useEffect(() => {
    if (highlightedProduct) return; // No rotar si hay un producto resaltado

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, highlightedProduct]);

  // Handlers
  const handleAction = (product, action) => {
    alert(`${action}: ${product.name} - ${product.price}`);
  };

  // Estilos
  const cardStyle = {
    position: 'absolute',
    width: '300px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '0',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
    transform: 'translateX(0) scale(0.9)',
    opacity: '0',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const priceBadgeStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#667eea',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  };

  return (
    <div id="tienda" style={{ padding: '60px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            color: 'rgba(0, 0, 0, 1)',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '10px'
          }}>
            Productos Destacados
          </h2>
          <p style={{
            color: 'rgba(12, 1, 1, 0.8)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubre nuestros productos más solicitados
          </p>
        </div>

        {/* Carrusel */}
        <div ref={carouselRef} style={{
          position: 'relative',
          height: '600px',
          overflow: 'hidden',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Contenedor de tarjetas */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            position: 'relative'
          }}>
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={el => cardRefs.current[index] = el}
                style={{
                  ...cardStyle,
                  border: highlightedProduct === product.id
                    ? '3px solid #00E5FF'
                    : 'none',
                  boxShadow: highlightedProduct === product.id
                    ? '0 0 20px rgba(0, 229, 255, 0.5)'
                    : cardStyle.boxShadow
                }}
              >
                {/* Imagen */}
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>

                {/* Contenido */}
                <div style={{ padding: '20px' }}>
                  <div style={priceBadgeStyle}>
                    {product.price}
                  </div>

                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    margin: '10px 0'
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '20px'
                  }}>
                    {product.description}
                  </p>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVerMas(product);
                      }}
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
                      Ver más
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction(product, 'Comprar');
                      }}
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
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          <Button
            onClick={prevSlide}
            className="d-lg-block position-absolute start-0 top-50 translate-middle-y rounded-circle bg-white text-primary border-0"
            style={{ width: '40px', height: '40px', zIndex: 30 }}
          >
            ❮
          </Button>

          <Button
            onClick={nextSlide}
            className="d-lg-block position-absolute end-0 top-50 translate-middle-y rounded-circle bg-white text-primary border-0"
            style={{ width: '40px', height: '40px', zIndex: 30 }}
          >
            ❯
          </Button>
        </div>

        {/* Indicadores */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          gap: '10px'
        }}>
          {products.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: currentIndex === index ? '#4a5568' : '#cbd5e0',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        {/* Modal */}
        <ModalDispo
          show={showModal}
          handleClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      </div>
    </div>
  );
};

export default MultiCardCarousel;