import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';

const MenuBar = () => {
    const { user, Logout } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    console.log(user);

    const handleLogout = () => {
        Logout();
        toast.error('Logged Out')
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg"
        variant="light" 
        fixed="top"
        className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
            <Container>
                <Navbar.Brand 
                as={Link}
                to="/home"
                >
                    <img width="40"
                    height="40"
                    className="d-inline-block align-top mr-2" src="https://i.ibb.co/mqrYLbg/car-1.png" alt="" />
                    <strong>Hot Wheels</strong>
                    </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/carsCollection">Available Cars</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {/* <Nav.Link href="#reviews">Reviews</Nav.Link> */}
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