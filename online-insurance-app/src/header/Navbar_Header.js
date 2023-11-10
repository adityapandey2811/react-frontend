import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
function Navbar_Header(props) {
    return (
        <div>
            <Navbar bg="secondary" variant="secondary" expand="lg">
            <Navbar.Brand href="#home">OIA</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='="mr-auto'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#signin">Sign In</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar_Header;