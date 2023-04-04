import React, { Component } from 'react'
import { Tab, Col, Container, Nav, Row  } from 'react-bootstrap'

import design from '../assets/design.png'
import team from '../assets/team.png'
import Programming from '../assets/programming.png'
import frameworks from '../assets/frameworks.webp'
import libraries from '../assets/Libraries.jpg'


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
 
                        <Nav variant="pills" className="Flex-column mt-5">
                            <Nav.Item>
                            <Nav.Link eventKey="first">
                                Design
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">
                                Team
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">
                                Programming
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="forth">
                                Frameworks
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fifth">
                                Libraries
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>

                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <img
                            src={design}
                            className="d-block w-100"
                            alt='pic'
                            />
                            <p>Learn React</p>image.png
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <img 
                            src={team}
                            className="d-block w-100"
                            alt='pic'
                            />
                            <p>Learn React</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <img 
                            src={Programming}
                            className="d-block w-100"
                            alt='pic'
                            />
                            <p>Learn React</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="forth">
                            <img 
                            src={frameworks}
                            className="d-block w-100"
                            alt='pic'
                            />
                            <p>Learn React</p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="fifth">
                            <img 
                            src={libraries}
                            className="d-block w-100"
                            alt='pic'
                            />
                            <p>Learn React</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
      </Container>
    )
  }
}
