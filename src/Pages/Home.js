import React, { Component } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import BgSlider from '../Components/BgSlider'

import devTeam1 from "../assets/devTeam.jpg"
import devTeam2 from "../assets/devTeam1.jpg"
import devTeam3 from "../assets/devTeam2.jpg"

export default class Home extends Component {
  render() {
    return (
    <>
    <BgSlider/>
    <Container>
        <h2 classNmae="text-center m-4">Our team</h2>
        <Row md={2}>
            <Card>
                <Card.Img 
                variant="top"
                src={devTeam1}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Dev team</Card.Text>
                    <Button variant="primary">
                        About Team
                    </Button>
                </Card.Body>
            </Card>
            
            <Card>
                <Card.Img 
                variant="top"
                src={devTeam2}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Dev team</Card.Text>
                    <Button variant="primary">
                        About Team
                    </Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img 
                variant="top"
                src={devTeam3}
                />
                <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>Dev team</Card.Text>
                    <Button variant="primary">
                        About Team
                    </Button>
                </Card.Body>
            </Card>
            
        </Row>
    </Container>
    </>
    )
  }
}
