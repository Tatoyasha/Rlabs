// import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
  } from "react-bootstrap";



import logo from './logo192.png';



const Header = () => {
    return(
      <>
      <Navbar sticky="top" collapseOnSelect expand="md" bg="secondary" variant="info">
        <Container>
          <Navbar.Brand to="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            /> React Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home"> Home </Nav.Link>
              <Nav.Link href="/about"> About us </Nav.Link>
              <Nav.Link href="/contacts"> Contacts </Nav.Link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-3"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
        
      
    </>
    )
}

export default Header

// export default class Header extends Component {
//   render() {
//     return (
// <>
//       <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand to="/">
//             <img
//               src={logo}
//               height="30"
//               width="30"
//               className="d-inline-block align-top"
//               alt="Logo"
//             /> React Site
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/home"> Home </Nav.Link>
//               <Nav.Link href="/about"> About us </Nav.Link>
//               <Nav.Link href="/contacts"> Contacts </Nav.Link>
//               <Nav.Link href="/blog"> Blog </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <FormControl
//                 type="text"
//                 placeholder="Search"
//                 className="me-sm-3"
//               />
//               <Button variant="outline-info">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//     )
//   }
// }
