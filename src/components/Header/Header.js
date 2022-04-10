import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../Sass/Partials/_Header.scss"

const Header = () => {
    return (
        <>
            <Navbar className='navbar' bg="info" expand="lg">
                <Container>
                    <Navbar.Brand className='site-logo' to="/">Authentication</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="nav-menu ms-auto" navbarScroll > 
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/blog">Blogs</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink> 
                    </Nav>

                    <Nav className='nav-right'>
                        <NavLink className="nav-link" to="/logIn"> <button type="button" className='nav-btn btn' variant="primary">LogIn</button> </NavLink>
                    </Nav>
                    
                    {/* <Form className="d-flex ms-4">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;