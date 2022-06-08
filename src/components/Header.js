import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

function Header (){
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React & Material-UI Sample Application</Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default Header;