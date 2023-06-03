import React, { Component } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import BgSlider from '../Components/BgSlider'

import devTeam1 from "../assets/devTeam.jpg"
import devTeam2 from "../assets/devTeam1.jpg"
import devTeam3 from "../assets/devTeam2.jpg"
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
    <>
    <BgSlider/>
    <Container style={{marginleft: 'auto', marginRight: 'auto', width: '60em', display:'block'}}>
        <h2 classNmae="text-center m-4">Our team</h2>
        <Row md={2}>
            <Card>
                <Card.Img 
                variant="top"
                src={devTeam1}
                />
                <Card.Body>
                    <Card.Title>Команда Веб-розробки</Card.Title>
                    <Card.Text> "Створюємо інтернет-рішення, що змінюють світ!"</Card.Text>
                    <Link to='/AboutTeam/1'>
                    <Button variant="primary">
                        About Team
                    </Button>
                    </Link>
                </Card.Body>
            </Card >
            
            <Card >
                <Card.Img 
                variant="top"
                src={devTeam2}
                />
                <Card.Body>
                    <Card.Title>Команда розробки додатків</Card.Title>
                    <Card.Text>"Перетворюємо ваші ідеї в мобільні додатки майбутнього!"</Card.Text>
                    <Link to='/AboutTeam/2'>
                    <Button variant="primary">
                        About Team
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img 
                variant="top"
                src={devTeam3}
                />
                <Card.Body>
                    <Card.Title>Команда Веб-Дизайну</Card.Title>
                    <Card.Text>"Ваш бренд, ваш стиль, наш творчий дотик!"</Card.Text>
                    <Link to='/AboutTeam/3'>
                    <Button variant="primary">
                        About Team
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
            
        </Row>
    </Container>
    </>
    )
  }
}
