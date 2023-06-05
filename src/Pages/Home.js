// import React, { Component } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import BgSlider from '../Components/BgSlider'

import devTeam1 from "../assets/devTeam.jpg"
import devTeam2 from "../assets/devTeam1.jpg"
import devTeam3 from "../assets/devTeam2.jpg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Home = () => {
    const { t } = useTranslation();
    return (
    <>
    <BgSlider/>
    <Container style={{marginleft: 'auto', marginRight: 'auto', width: '60em', display:'block'}}>
        <h2 classNmae="text-center m-4">{t('teamTitle')}</h2>
        <Row md={2}>
            <Card>
                <Card.Img 
                variant="top"
                src={devTeam1}
                />
                <Card.Body>
                    <Card.Title>{t('webDevTeam')}</Card.Title>
                    <Card.Text>{t('webDevTeamDescription')}</Card.Text>
                    <Link to='/AboutTeam/1'>
                    <Button variant="primary">
                        {t('aboutTeam')}
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
                    <Card.Title>{t('appDevTeam')}</Card.Title>
                    <Card.Text>{t('appDevTeamDescription')}</Card.Text>
                    <Link to='/AboutTeam/2'>
                    <Button variant="primary">
                        {t('aboutTeam')}
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
                    <Card.Title>{t('webDesignTeam')}</Card.Title>
                    <Card.Text>{t('webDesignTeamDescription')}</Card.Text>
                    <Link to='/AboutTeam/3'>
                    <Button variant="primary">
                        {t('aboutTeam')}
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
            
        </Row>
    </Container>
    </>
    )
  
}

export default Home;