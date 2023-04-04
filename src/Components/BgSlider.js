import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import hils1 from '../assets/pexels-jeff-guab-2407636.jpg'
import hils2 from '../assets/pexels-joyston-judah-933054.jpg'
import hils3 from '../assets/pexels-stephan-seeber-1261728.jpg'
import hils4 from '../assets/pexels-trace-hudson-2724664.jpg'

export default class BgSlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={hils1}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>Slide label</h3>
                <p>Caption for slide</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={hils2}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>Slide label</h3>
                <p>Caption for slide</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={hils3}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>Slide label</h3>
                <p>Caption for slide</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={hils4}
                alt="hils"
            />
            <Carousel.Caption>
                <h3>Slide label</h3>
                <p>Caption for slide</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
