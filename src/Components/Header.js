import React, { useState } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button, Modal } from 'react-bootstrap';
import logo from './logo192.png';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="md" bg="secondary" variant="info">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="Logo" /> React Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="me-sm-3" />
              <Button variant="outline-info">Search</Button>
              <Button variant="primary" onClick={handleShowModal}>
            Login
          </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{
          <Form>
            <Form.Group controlId="fromBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password">
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="fromBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        }</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;






