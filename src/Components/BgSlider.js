import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import dt1 from '../assets/DT1.jpg'
import dt2 from '../assets/DT2.jpg'
import dt3 from '../assets/DT3.jpg'
import dt4 from '../assets/DT4.jpg'

export default class BgSlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={dt1}
                alt="hils"
            />
            <Carousel.Caption>
                <h1>IT-TEAM</h1>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={dt2}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>IT-TEAM</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={dt3}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>IT-TEAM</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={dt4}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>IT-TEAM</h3>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
