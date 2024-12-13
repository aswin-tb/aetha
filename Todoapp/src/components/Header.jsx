import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/todo'} className='text'style={{textDecoration:"none"}} >Todo Tasks</Link></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link><Link to={'/home'} className='text'style={{textDecoration:"none"}} >Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/about'} style={{textDecoration:"none"}}>About</Link></Nav.Link>
                        <Nav.Link><Link to={'/contact'} style={{textDecoration:"none"}}>Contact</Link></Nav.Link>
                        <Nav.Link><Link to={'/FormHandling'} style={{textDecoration:"none"}}>Form Handling</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header