import { useState } from 'react'
import { Navcbar } from './Componentes/Navbar/Navcbar'
import HeroSection from './Componentes/Herseccion/Herosection'
import { Etiquetas } from './Componentes/EtiquetasPostCarousel/Etiquetas'
import AnimatedProductCarousel from './Componentes/Carrousel/Carrousel'
import MultiCardCarousel from './Componentes/CarrouselAccesorios/CarrouselAccesorios'
import { Footer } from './Componentes/Foother/Foother'
import RotatingCircleComponent from './Componentes/Nuestros_Servicios/NuestrosServicios'



function App() {
 const [searchTerm, setSearchTerm] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);

  return (
    <>
    <div  className="d-none d-lg-block position-absolute top-0 start-0 end-0">
       <Navcbar 
          onSearch={setSearchTerm} 
          setSearchedProduct={setSearchedProduct} 
        />
    </div>
      <div id="inicio">  {/* HeroSection */}
        <HeroSection />
      </div>
      <div id="tienda">  {/* MultiCardCarousel */}
        <Etiquetas />
         <MultiCardCarousel 
          searchTerm={searchTerm}
          searchedProduct={searchedProduct}
        />
      </div>
      <div id="servicios">  {/* RotatingCircleComponent */}
        <RotatingCircleComponent />
      </div>
      <div id="accesorios">  {/* AnimatedProductCarousel */}
        <AnimatedProductCarousel 
        searchTerm={searchTerm}
          searchedProduct={searchedProduct}/>
        
      </div>
      <div id="seguinos">  {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App
