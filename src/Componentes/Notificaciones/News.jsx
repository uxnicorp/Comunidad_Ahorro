import React, { useState } from 'react';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aquí reemplazas con tus imágenes y links de Instagram/Reels
  const newsItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      title: 'Noticia 1',
      instagramLink: 'https://www.instagram.com/stories/highlights/18082859446533110/' // Reemplaza con tu link
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      title: 'Noticia 2',
      instagramLink: 'https://www.instagram.com/reel/XXXXX/'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      title: 'Noticia 3',
      instagramLink: 'https://www.instagram.com/reel/XXXXX/'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      title: 'Noticia 4',
      instagramLink: 'https://www.instagram.com/reel/XXXXX/'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #ffffff 100%)'
    }}>
      {/* Elementos decorativos de fondo tipo flyer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '384px',
          height: '384px',
          background: 'white',
          borderRadius: '50%',
          opacity: 0.1,
          marginRight: '-192px',
          marginTop: '-192px'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '384px',
          height: '384px',
          background: '#1e3a8a',
          borderRadius: '50%',
          opacity: 0.1,
          marginLeft: '-192px',
          marginBottom: '-192px'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          width: '256px',
          height: '256px',
          background: 'white',
          borderRadius: '50%',
          opacity: 0.05
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33%',
          right: '25%',
          width: '192px',
          height: '192px',
          background: '#1e40af',
          borderRadius: '50%',
          opacity: 0.05
        }}></div>
        
        {/* Líneas decorativas */}
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          height: '4px',
          background: 'white',
          opacity: 0.1,
          transform: 'rotate(-12deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: 0,
          width: '100%',
          height: '4px',
          background: '#1e3a8a',
          opacity: 0.1,
          transform: 'rotate(12deg)'
        }}></div>
      </div>

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 16px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}>
            Mira nuestras novedades
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            background: 'white',
            margin: '0 auto'
          }}></div>
        </div>

        {/* Carrusel */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s ease-out',
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {newsItems.map((item) => (
                <div key={item.id} style={{ minWidth: '100%' }}>
                  <a 
                    href={item.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      position: 'relative',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      paddingBottom: '56.25%', // Aspect ratio 16:9
                      background: 'white',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.7s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      
                      {/* Overlay gradiente */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)'
                      }}></div>

                      {/* Badge NUEVO */}
                      <div style={{
                        position: 'absolute',
                        top: '32px',
                        right: '32px',
                        background: 'white',
                        color: '#2563eb',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                        fontSize: '14px'
                      }}>
                        NUEVO
                      </div>

                      {/* Título y botón */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 'clamp(24px, 4vw, 48px)'
                      }}>
                        <h3 style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                          fontWeight: 'bold',
                          color: 'white',
                          marginBottom: '16px',
                          textShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'
                        }}>
                          {item.title}
                        </h3>
                        
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                          color: 'white',
                          padding: '12px 24px',
                          borderRadius: '9999px',
                          fontWeight: '600',
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          Ver en Instagram
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#2563eb',
              padding: '12px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              zIndex: 20,
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#2563eb',
              padding: '12px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              zIndex: 20,
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicadores de puntos */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '32px'
          }}>
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  background: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  width: index === currentIndex ? '48px' : '12px',
                  height: '12px',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
                  }
                }}
                onMouseOut={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Texto decorativo */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '16px 32px',
            borderRadius: '9999px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p style={{
              color: 'white',
              fontWeight: '600',
              fontSize: '18px',
              margin: 0
            }}>
              Desliza para ver más noticias →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;