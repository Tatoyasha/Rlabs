import React, { useState, useEffect } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button, Modal } from 'react-bootstrap';
import logo from './logo192.png';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не може бути порожнім');
  const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
  const [confirmPasswordError, setConfirmPasswordError] = useState('Підтвердження паролю не може бути порожнім');
  const [formValid_login, setFormValid_login] = useState(false);
  const [formValid_reg, setFormValid_reg] = useState(false)

  const combinatedAction = () =>{
    handleCloseModal();
    handleShowRegisterModal();

  }
  
  
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setEmailError('Некоректний email');
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів');
      if (!e.target.value) {
        setPasswordError('Пароль не може бути порожнім');
      }
    } else {
      setPasswordError('');
    }
  }

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Підтвердження паролю не співпадає з паролем');
    } else {
      setConfirmPasswordError('');
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'confirmPassword':
        setConfirmPasswordDirty(true);
        break;
      default:
        // Обработка для других случаев
        break;
    }
  }

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setFormValid_reg(false);
    } else {
      setFormValid_reg(true);
    }
  }, [emailError, passwordError, confirmPasswordError]);
  
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid_login(false);
    } else {
      setFormValid_login(true);
    }
  }, [emailError, passwordError]);


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
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
              <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
              <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button disabled={!formValid_login} variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" onClick={combinatedAction}>
                Create Account
              </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
              <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
              <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              {(confirmPasswordError && confirmPasswordDirty) && <div style={{ color: "red" }}>{confirmPasswordError}</div>}
              <Form.Control onChange={e => confirmPasswordHandler(e)} name="confirmPassword" value={confirmPassword} onBlur={e => blurHandler(e)} type="password" placeholder="Confirm password">
              </Form.Control>
            </Form.Group>

            <Button disabled={!formValid_reg} variant="primary" type="submit">
              Register
            </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
