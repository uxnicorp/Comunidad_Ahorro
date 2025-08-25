import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import funda from '../../assets/funda.jpg';
import cargador from '../../assets/cargador.jpg';
import auris from '../../assets/auris.jpg';
import ModalAccesorios from './ModalAccesorios';

//para accesorios
const AnimatedProductCarousel = ({ searchTerm, searchedProduct }) => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedProduct, setHighlightedProduct] = useState(null);

  // Estado para el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el modal
  const handleVerMas = (product) => {
    setSelectedProduct({
      ...product,
      details: getProductDetails(product.id)
    });
    setShowModal(true);
  };

  // Detalles específicos para cada producto
  const getProductDetails = (productId) => {
    const details = {
      6: [ // Cargador
        { title: "Potencia", value: "30W" },
        { title: "Tiempo de carga", value: "0-50% en 30 min" },
        { title: "Conector", value: "USB-C" },
        { title: "Incluye", value: "Cable de 1.8m" }
      ],
      7: [ // AirPods
        { title: "Batería", value: "Hasta 6 horas de audio" },
        { title: "Carga", value: "15 min carga = 3 horas de uso" },
        { title: "Cancelación de ruido", value: "Activa" },
        { title: "Resistencia", value: "IPX4 (agua y sudor)" }
      ],
      8: [ // Funda
        { title: "Material", value: "Silicona premium" },
        { title: "Protección", value: "Anti-golpes y arañazos" },
        { title: "Compatibilidad", value: "iPhone 15 Pro" },
        { title: "Color", value: "Varios disponibles" }
      ]
    };
    return details[productId] || null;
  };

  // Datos de accesorios
  const products = [
    {
      id: 6,
      name: "Cargador Rápido 30W",
      description: "Cargador USB-C rápido compatible con iPhone y Android. Incluye cable de 1.8m.",
      image: cargador,
      price: "$29.99",

      det1:'Adaptador USB-C de 30 W de Apple carga rápida y eficiente',
      det2:'Cable Lightning USB C',
      det3:'Acabado blando brillante',
      det4:'Compatibilidad con AirPods',

      keywords: ["cargador", "carga rápida", "usb c", "adaptador"]
    },
    {
      id: 7,
      name: "Auriculares Inalámbrico",
      description: "Auriculares inalámbricos con cancelación de ruido activa y sonido espacial.",
      image: auris,
      price: "$249.99",

 det1:'Cancelación Activa de Ruido, Audio Adaptativo y modo Ambiente',
      det2:'Hasta 5 horas de audio con una sola carga',
      det3:'Hasta 30 horas de audio en total, usando el estuche',
      det4:'Estuche de carga (USB‑C)',

      keywords: ["auriculares", "airpods", "audífonos", "inalámbricos"]
    },
    {
      id: 8,
      name: "Funda iPhone 11",
      description: "Funda protectora de silicona para iPhone 15 Pro, resistente a golpes.",
      image: funda,
      price: "$39.99",

      det1:'Funda Premium Silicona líquida suave al tacto, duradera y antigolpes ',
      det2:'Interior aterciopelado de microfibra protectora que cuida tu dispositivo',
      det3:'Diseño ergonómico excelente agarre y comodidad en mano Acabado antideslizante',
      det4:'Protección reforzada relieve para proteger la cámara trasera (en los modelos que lo requieren)',

      keywords: ["funda", "case", "protector", "iphone case"]
    }
  ];

  // Obtener tarjetas visibles
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Animación de tarjetas
  const animateCards = () => {
    const visibleCards = getVisibleCards();

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

      if (index === visibleCards[1]) { // Centro
        card.style.transform = 'translateX(0) scale(1.05)';
        card.style.zIndex = '10';
        card.style.opacity = '1';
      } else if (index === visibleCards[0]) { // Izquierda
        card.style.transform = 'translateX(-100px) scale(0.9)';
        card.style.zIndex = '5';
        card.style.opacity = '0.8';
      } else if (index === visibleCards[2]) { // Derecha
        card.style.transform = 'translateX(100px) scale(0.9)';
        card.style.zIndex = '5';
        card.style.opacity = '0.8';
      } else { // Ocultas
        card.style.transform = 'translateX(0) scale(0.7)';
        card.style.zIndex = '1';
        card.style.opacity = '0';
      }
    });
  };

  // Navegación
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  // Efecto para manejar búsquedas - VERSIÓN SIMPLIFICADA
  useEffect(() => {
    if (searchedProduct) {
      // Encontrar el índice basado en el ID del producto buscado
      const foundIndex = products.findIndex(p => p.id === searchedProduct.id);
      
      if (foundIndex !== -1) {
        console.log(`Mostrando producto ID ${searchedProduct.id} en posición central`);
        
        // 1. Resaltar el producto
        setHighlightedProduct(searchedProduct.id);
        
        // 2. Posicionar exactamente en el centro
        setCurrentIndex(foundIndex);
        
        // 3. Quitar resaltado después de 3 segundos
        const timer = setTimeout(() => {
          setHighlightedProduct(null);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [searchedProduct]);

  // Efecto para animar las tarjetas cuando cambia currentIndex
  useEffect(() => {
    animateCards();
  }, [currentIndex]);

  // Auto-rotación del carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handlers
  const handleAction = (product, action) => {
    alert(`${action}: ${product.name} - ${product.price}`);
  };

  return (
    <div id="accesorios" style={{ padding: '60px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            color: 'rgba(0, 204, 255, 1)',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '10px',
          }}>
            Accesorios Destacados
          </h2>
          <p style={{
            color: 'rgba(12, 1, 1, 0.8)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Los mejores complementos para tus dispositivos
          </p>
        </div>

        {/* Carrusel */}
        <div ref={carouselRef} style={{
          position: 'relative',
          height: '650px',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          {/* Tarjetas */}
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
                  position: 'absolute',
                  width: '350px',
                  height: '580px',
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '0',
                  boxShadow: highlightedProduct === product.id
                    ? '0 0 25px rgba(0, 229, 255, 0.6)'
                    : '0 20px 40px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  left: '50%',
                  marginLeft: '-175px',
                  border: highlightedProduct === product.id
                    ? '3px solid #00E5FF'
                    : 'none',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Imagen */}
                <div style={{
                  width: '100%',
                  height: '350px',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '20px 20px 0 0',
                  flexShrink: 0
                }}></div>

                {/* Contenido */}
                <div style={{ 
                  padding: '20px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '320px',
                    right: '15px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {product.price}
                  </div>

                  <div style={{ marginTop: '15px' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      margin: '0 0 10px 0',
                      lineHeight: '1.3'
                    }}>
                      {product.name}
                    </h3>

                    <p style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      marginBottom: '15px',
                      lineHeight: '1.4',
                      height: '60px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {product.description}
                    </p>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    gap: '10px',
                    marginTop: '10px'
                  }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVerMas(product);
                      }}
                      style={{
                        flex: 1,
                        padding: '10px',
                        border: '2px solid #667eea',
                        background: 'transparent',
                        color: '#667eea',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        fontSize: '0.9rem',
                        fontWeight: '500'
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
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      Comprar
                    </button>
                  </div>
                </div>

                <ModalAccesorios
                  show={showModal}
                  handleClose={() => setShowModal(false)}
                  product={selectedProduct}
                />
              </div>
            ))}
          </div>

          {/* Controles - Flechas */}
          <Button
            onClick={prevSlide}
            className="d-none d-lg-block position-absolute start-0 top-50 translate-middle-y rounded-circle bg-white text-primary border-0"
            style={{ width: '50px', height: '50px', zIndex: 30 }}
          >
            ❮
          </Button>

          <Button
            onClick={nextSlide}
            className="d-none d-lg-block position-absolute end-0 top-50 translate-middle-y rounded-circle bg-white text-primary border-0"
            style={{ width: '50px', height: '50px', zIndex: 30 }}
          >
            ❯
          </Button>
        </div>

        {/* Indicadores */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          gap: '12px'
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
                transition: 'all 0.3s',
                transform: currentIndex === index ? 'scale(1.3)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedProductCarousel;