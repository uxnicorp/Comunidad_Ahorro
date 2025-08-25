import React, { useEffect, useRef } from 'react';

const HeroSection2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createShape = () => {
      const shape = document.createElement('div');
      const size = 120 + Math.random() * 180; // Pills MÁS GRANDES (antes 80 + 120)
      const duration = 8000 + Math.random() * 6000; // MÁS LENTO (antes 6000 + 4000)
      const delay = Math.random() * 3000;
      
      // Posiciones iniciales - Desde TODA la pantalla (incluyendo izquierda)
      const startX = window.innerWidth * (0.0 + Math.random() * 1.2); // Entre 0%-120% del ancho (TODA LA PANTALLA)
      const startY = 150 - Math.random() * 100; // Entre 50px y 150px desde arriba
      
      // Posiciones finales - Cubriendo completamente la izquierda
      const endX = 0 - Math.random() * 100; // Entre 0px y -100px (MÁS VISIBLE en la izquierda)
      const endY = window.innerHeight * (0.8 + Math.random() * 0.3); // Entre 80%-110% altura
      
      // Estilos iniciales
      Object.assign(shape.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size * 0.3}px`, // MÁS LARGAS (antes 0.4)
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.1), 
          rgba(135, 206, 250, 0.2), 
          rgba(100, 149, 237, 0.15))`,
        borderRadius: '50px',
        filter: 'blur(0.5px)',
        opacity: '0',
        left: `${startX}px`,
        top: `${startY}px`,
        transform: `rotate(-45deg) scale(${0.5 + Math.random() * 0.8})`,
        animation: `
          meteorShower ${duration}ms linear infinite,
          pulse ${2000 + Math.random() * 2000}ms ease-in-out infinite alternate
        `,
        animationDelay: `${delay}ms`,
        zIndex: '1',
        pointerEvents: 'none'
      });

      container.appendChild(shape);

      // Limpiar después de la animación
      setTimeout(() => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      }, duration + delay + 1000);
    };

    const createLargeShape = () => {
      const shape = document.createElement('div');
      const size = 160 + Math.random() * 140; // Pills grandes MÁS GRANDES (antes 120 + 100)
      const duration = 10000 + Math.random() * 8000; // MÁS LENTO (antes 8000 + 6000)
      const delay = Math.random() * 4000;
      
      // Posiciones iniciales - Desde TODA la pantalla (incluyendo izquierda)
      const startX = window.innerWidth * (0.1 + Math.random() * 1.1); // Entre 10%-120% del ancho (TODA LA PANTALLA)
      const startY = 0 - Math.random() * 300; // Entre 0px y 300px arriba
      
      // Posiciones finales - Cubriendo completamente la izquierda
      const endX = -20 - Math.random() * 120; // Entre -20px y -140px (MÁS VISIBLE en la izquierda)
      const endY = window.innerHeight * (0.7 + Math.random() * 0.4); // Entre 70%-110% altura
      
      Object.assign(shape.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size * 0.4}px`, // MÁS LARGAS Y ANCHAS
        background: `radial-gradient(ellipse, 
          rgba(255, 255, 255, 0.05), 
          rgba(173, 216, 230, 0.1), 
          transparent)`,
        borderRadius: '100px',
        filter: 'blur(1px)',
        opacity: '0',
        left: `${startX}px`,
        top: `${startY}px`,
        transform: `rotate(-45deg) scale(${0.3 + Math.random() * 0.5})`,
        animation: `
          meteorShowerSlow ${duration}ms linear infinite,
          pulseSlow ${3000 + Math.random() * 2000}ms ease-in-out infinite alternate
        `,
        animationDelay: `${delay}ms`,
        zIndex: '0',
        pointerEvents: 'none'
      });

      container.appendChild(shape);

      setTimeout(() => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      }, duration + delay + 1000);
    };

    // Crear formas iniciales - MÁS CANTIDAD
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createShape(), i * 400); // Intervalo más corto
    }
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createLargeShape(), i * 800);
    }

    // Continuar creando formas - MÁS LENTO para compensar el aumento de tamaño
    const shapeInterval = setInterval(createShape, 800); // MÁS LENTO (antes 600ms)
    const largeShapeInterval = setInterval(createLargeShape, 1600); // MÁS LENTO (antes 1200ms)

    return () => {
      clearInterval(shapeInterval);
      clearInterval(largeShapeInterval);
    };
  }, []);

  return (
    <>
      {/* Estilos CSS para las animaciones */}
      <style jsx>{`
        @keyframes meteorShower {
          0% {
            opacity: 0;
            transform: rotate(-45deg) scale(0.5) translate(0, 0);
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: rotate(-45deg) scale(1) translate(calc(-100vw - 100px), calc(90vh + 150px));
          }
        }

        @keyframes meteorShowerSlow {
          0% {
            opacity: 0;
            transform: rotate(-45deg) scale(0.3) translate(0, 0);
          }
          15% {
            opacity: 0.4;
          }
          85% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: rotate(-45deg) scale(0.8) translate(calc(-120vw - 150px), calc(80vh + 200px));
          }
        }

        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }

        @keyframes pulseSlow {
          0% { opacity: 0.2; }
          100% { opacity: 0.5; }
        }

        .hero-content {
          animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-button:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .hero-button-primary:hover {
          box-shadow: 0 12px 35px rgba(0, 229, 255, 0.4) !important;
        }

        .hero-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>

      <div 
        ref={containerRef}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 25%, #2E5BBA 50%, #1E3A8A 75%, #1E293B 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Contenido principal */}
        <div 
          className="hero-content"
          style={{
            textAlign: 'center',
            color: 'white',
            zIndex: 10,
            position: 'relative',
            maxWidth: '800px',
            padding: '0 20px'
          }}
        >
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            ASÍ PUEDES
            <br />
            <span style={{ 
              background: 'linear-gradient(45deg, #00E5FF, #40C4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CREAR TU PORTFOLIO
            </span>
          </h1>
          
          <p 
            style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}
          >
            Diseños innovadores y modernos que destacan tu trabajo profesional
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="hero-button hero-button-primary"
              style={{
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00E5FF, #40C4FF)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 229, 255, 0.3)'
              }}
            >
              Ver Portfolio
            </button>
            
            <button 
              className="hero-button hero-button-secondary"
              style={{
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Efectos de luminosidad */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1), transparent)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: 0,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }}
        />
        
        <div 
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(64, 196, 255, 0.1), transparent)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            zIndex: 0,
            animation: 'pulseSlow 3s ease-in-out infinite alternate'
          }}
        />

        {/* Formas estáticas de fondo para contexto visual */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${60 + i * 15}px`,
              height: `${30 + i * 8}px`,
              background: `rgba(255, 255, 255, ${0.03 + i * 0.01})`,
              borderRadius: '50px',
              transform: `rotate(-45deg)`,
              right: `${15 + i * 10}%`,
              filter: 'blur(2px)',
              zIndex: 0
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HeroSection2;