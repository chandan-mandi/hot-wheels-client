import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';

const MenuBar = () => {
    const { user, Logout } = useAuth();
    console.log(user);

    const handleLogout = () => {
        Logout();
        toast.error('Logged Out')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/home">Hot Wheels</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/carsCollection">Cars</Nav.Link>
                        <Nav.Link as={Link} to="/sellCar">Sell Car</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        {!user?.email ?
                            <Link to="/login"><Button variant="danger">Login</Button></Link>
                            :
                            <div>
                            <Button onClick={handleLogout} variant="danger">{user.email} <br /> Logout </Button>
                            <Toaster/>
                            </div>
                            
                        }
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;