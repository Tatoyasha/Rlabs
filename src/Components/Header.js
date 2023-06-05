import React, { useState, useEffect } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button, Modal } from 'react-bootstrap';
import logo from './logo192.png';
import { useTranslation } from 'react-i18next';

import i18n from './i18n_locals';

const Header = () => {

  const languageHandler = (e) =>{
    i18n.changeLanguage(e.target.value);
  } 
  const { t } = useTranslation();
  
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
  const [emailError, setEmailError] = useState(t('emailEmptyError'));
  const [passwordError, setPasswordError] = useState(t('passwordEmptyErr'));
  const [confirmPasswordError, setConfirmPasswordError] = useState(t('confirmPasswordEmptyError'));
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
      setEmailError(t('emailError'));
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(t('passwordError'));
      if (!e.target.value) {
        setPasswordError(t('passwordEmptyErr'));
      }
    } else {
      setPasswordError('');
    }
  }

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError(t('confirmPasswordError"'));
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
        // Обробка на інші випадки
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
              <Nav.Link href="/">{t('home')}</Nav.Link>
              <Nav.Link href="/about">{t('about')}</Nav.Link>
              <Nav.Link href="/contacts">{t('contacts')}</Nav.Link>
              <Nav.Link href="/blog">{t('blog')}</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder={t('search')} className="me-sm-3" />
              <Button variant="outline-info">{t('search')}</Button>
              <Button variant="primary" onClick={handleShowModal}>
                {t('login')}
              </Button>
              <select name="language" className='mx-2 fs-3 bg-transparent border-0 ' onChange={languageHandler}>
                <option value='eng'>ENG</option>
                <option value='ua' selected>UA</option>
              </select>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t('login')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t('emailAddress')}</Form.Label>
              {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
              <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder={t('enterEmail')} />
              <Form.Text className="text-muted">
                {t('emailPS')}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t('password')}</Form.Label>
              {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
              <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder={t('enterPassword')}>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={t('rememberMe')} />
            </Form.Group>

            <Button disabled={!formValid_login} variant="primary" type="submit">
              {t('submit')}
            </Button>
            <Button variant="primary" onClick={combinatedAction}>
                {t('createAccount')}
              </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t('createAccount')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t('emailAddress')}</Form.Label>
              {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
              <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder={t('enterEmail')} />
              <Form.Text className="text-muted">
                {t('emailPS')}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>{t('password')}</Form.Label>
              {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
              <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder={t('enterPassword')}>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>{t('confirmPassword')}</Form.Label>
              {(confirmPasswordError && confirmPasswordDirty) && <div style={{ color: "red" }}>{confirmPasswordError}</div>}
              <Form.Control onChange={e => confirmPasswordHandler(e)} name="confirmPassword" value={confirmPassword} onBlur={e => blurHandler(e)} type="password" placeholder={t('enterConfirmPassword')}>
              </Form.Control>
            </Form.Group>

            <Button disabled={!formValid_reg} variant="primary" type="submit">
              {t('register')}
            </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
