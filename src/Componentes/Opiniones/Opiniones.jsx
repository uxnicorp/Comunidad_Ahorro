import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Aquí reemplazas con los testimonios reales de tus clientes
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Directora de Marketing',
      company: 'Tech Solutions',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'Excelente servicio, superaron todas nuestras expectativas. El equipo es profesional y siempre están disponibles para ayudar. Definitivamente los recomendaría.'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'CEO',
      company: 'Innovate Corp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'Trabajar con ellos fue una experiencia increíble. La calidad del trabajo y la atención al detalle son incomparables. Han transformado completamente nuestro negocio.'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Gerente de Proyectos',
      company: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'La mejor decisión que tomamos fue confiar en su equipo. Son creativos, responsables y entregan resultados que realmente importan. ¡100% recomendados!'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      role: 'Fundador',
      company: 'StartUp Hub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'Impresionante nivel de profesionalismo y dedicación. Cada detalle fue cuidadosamente pensado. El resultado final superó ampliamente lo que esperábamos.'
    }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const StarIcon = ({ filled }) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill={filled ? "#fbbf24" : "none"} 
      stroke="#fbbf24" 
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const QuoteIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(59, 130, 246, 0.2)">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)',
      padding: '80px 20px'
    }}>
      {/* Elementos decorativos de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        {/* Partículas flotantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            padding: '8px 24px',
            borderRadius: '9999px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginBottom: '20px'
          }}>
            <p style={{
              color: '#60a5fa',
              fontWeight: '600',
              fontSize: '14px',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Testimonios
            </p>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            lineHeight: '1.2'
          }}>
            Lo que dicen nuestros clientes
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Historias reales de personas que confiaron en nosotros
          </p>
        </div>

        {/* Carrusel */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} style={{ minWidth: '100%', padding: '0 20px' }}>
                  {/* Card del testimonio */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '32px',
                    padding: 'clamp(40px, 5vw, 60px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    {/* Ícono de comillas decorativo */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      opacity: 0.5
                    }}>
                      <QuoteIcon />
                    </div>

                    {/* Contenido superior */}
                    <div>
                      {/* Rating de estrellas */}
                      <div style={{
                        display: 'flex',
                        gap: '4px',
                        marginBottom: '24px'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < testimonial.rating} />
                        ))}
                      </div>

                      {/* Texto del testimonio */}
                      <p style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                        lineHeight: '1.8',
                        color: 'white',
                        marginBottom: '32px',
                        fontStyle: 'italic',
                        fontWeight: '300'
                      }}>
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Información del cliente */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      paddingTop: '24px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {/* Avatar */}
                      <div style={{
                        position: 'relative'
                      }}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3px solid rgba(59, 130, 246, 0.5)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '2px',
                          right: '2px',
                          width: '20px',
                          height: '20px',
                          background: '#10b981',
                          borderRadius: '50%',
                          border: '3px solid #0f172a'
                        }}></div>
                      </div>

                      {/* Info del cliente */}
                      <div>
                        <h4 style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: 'white',
                          margin: '0 0 4px 0'
                        }}>
                          {testimonial.name}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 0.6)',
                          margin: '0'
                        }}>
                          {testimonial.role}
                        </p>
                        <p style={{
                          fontSize: '14px',
                          color: '#60a5fa',
                          margin: '2px 0 0 0',
                          fontWeight: '600'
                        }}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '16px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '16px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicadores de puntos */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '40px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  background: index === currentIndex 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' 
                    : 'rgba(255, 255, 255, 0.3)',
                  width: index === currentIndex ? '40px' : '12px',
                  height: '12px',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: index === currentIndex ? '0 4px 12px rgba(59, 130, 246, 0.5)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                  }
                }}
                onMouseOut={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Estadísticas decorativas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          maxWidth: '900px',
          margin: '80px auto 0',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px'
            }}>500+</div>
            <div style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>Clientes Felices</div>
          </div>
          <div>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px'
            }}>4.9/5</div>
            <div style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>Calificación Promedio</div>
          </div>
          <div>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px'
            }}>98%</div>
            <div style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>Satisfacción</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;