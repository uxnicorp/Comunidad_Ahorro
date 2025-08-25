import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/Logo1_Black-removebg-preview.png';
import { BiSearch } from 'react-icons/bi';

export const Navcbar = ({ onSearch, setSearchedProduct }) => {
    const [searchInput, setSearchInput] = useState('');

    // Lista completa de productos para búsqueda (dispositivos + accesorios)
    const products = [
        // Dispositivos (IDs 1-5)
        { id: 1, name: "iPhone 11", keywords: ["iphone11", "iphone 11", "apple", "11"] },
        { id: 2, name: "iPhone 13", keywords: ["iphone13", "iphone 13", "apple", "13"] },
        { id: 3, name: "iPhone 13 pro max", keywords: ["iphone13 pro max", "iphone 13 pro max", "apple", "13 pro max", "pro max"] },
        { id: 4, name: "iPhone 14", keywords: ["iphone14", "iphone 14", "apple", "14"] },
        { id: 5, name: "iPhone 16", keywords: ["iphone16", "iphone 16", "apple", "16"] },
        
        // Accesorios (IDs 6-8)
        { id: 6, name: "Cargador Rápido 30W", keywords: ["cargador", "carga rápida", "usb c", "adaptador"] },
        { id: 7, name: "Auriculares Inalámbrico", keywords: ["auriculares", "airpods", "audífonos", "inalámbricos"] },
        { id: 8, name: "Funda iPhone 11", keywords: ["funda", "case", "protector", "iphone case"] }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const term = searchInput.trim().toLowerCase();
        
        if (!term) return;
        
        onSearch(term);

        // Buscar el producto que coincida con el término
        const foundProduct = products.find(product => 
            product.keywords.some(keyword => 
                keyword.toLowerCase().includes(term) || 
                term.includes(keyword.toLowerCase())
            )
        );

        if (foundProduct) {
            console.log('Producto encontrado:', foundProduct); // Para debug
            setSearchedProduct(foundProduct);
            
            // Determinar a qué sección ir basado en el ID del producto
            if (foundProduct.id >= 1 && foundProduct.id <= 5) {
                // Es un dispositivo
                scrollToSection('tienda');
            } else if (foundProduct.id >= 6 && foundProduct.id <= 8) {
                // Es un accesorio
                scrollToSection('accesorios');
            }
        } else if (term.includes('iphone') || term.includes('apple')) {
            // Si busca algo relacionado con iPhone pero no encuentra coincidencia exacta
            scrollToSection('tienda');
        } else {
            // Busqueda general - ir a accesorios por defecto
            scrollToSection('accesorios');
        }

        setSearchInput('');
    };

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar-dark navbar-glass">
            <Container fluid>
                <Navbar.Brand onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}>
                    <img src={Logo} alt="Logo" style={{ width: '200px', height: '100px', objectFit: 'cover' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Form className="d-flex rounded-pill bg-light me-4" onSubmit={handleSearch}>
                            <Form.Control
                                type="search"
                                placeholder=" modelo o accesorio"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="rounded-start-pill border-0"
                            />
                            <Button type="submit" variant="light" className="rounded-end-circle border-0">
                                <BiSearch />
                            </Button>
                        </Form>

                       
                        <Nav.Link onClick={() => scrollToSection('tienda')} className="me-4">Tienda</Nav.Link>

                        <NavDropdown title="Categoria" id="navbarScrollingDropdown" className="me-4">
                            <NavDropdown.Item onClick={() => scrollToSection('tienda')}>Dispositivo</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => scrollToSection('accesorios')}>Accesorio</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={() => scrollToSection('servicios')} className="me-4">Servicios</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('seguinos')} className="me-4">Seguinos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
