import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () =>{
    return(
    <div className="header">
         <Navbar sticky="top" bg="light" variant="light">
            <Navbar.Brand href="#home">EVENTTY</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
                
                <Button variant="outline-info">Login</Button>
                <Button type="submit">Register</Button>
            
        </Navbar>        
    </div>
    )
}

export default Header;