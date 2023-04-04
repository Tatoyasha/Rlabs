import React, { Component } from 'react'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import JsLogo from "../assets/JavaScript-logo.png"
export default class Blog extends Component {
  render() {
    return (
      <Row>
        <Col md={9}>
            <div className="d-flex align-items-center me-5">
                <div className="flex-shrink-0">
                   <img 
                    width={150}
                    height={150}
                    className="mr-3"
                    src={JsLogo}
                    alt="Jslogo"
                   />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5>Blog post</h5>
                    <p>
                        Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center me-5">
                <div className="flex-shrink-0">
                   <img 
                    width={150}
                    height={150}
                    className="mr-3"
                    src={JsLogo}
                    alt="Jslogo"
                   />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5>Blog post</h5>
                    <p>
                        Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center me-5">
                <div className="flex-shrink-0">
                   <img 
                    width={150}
                    height={150}
                    className="mr-3"
                    src={JsLogo}
                    alt="Jslogo"
                   />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5>Blog post</h5>
                    <p>
                        Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center me-5">
                <div className="flex-shrink-0">
                   <img 
                    width={150}
                    height={150}
                    className="mr-3"
                    src={JsLogo}
                    alt="Jslogo"
                   />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5>Blog post</h5>
                    <p>
                        Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
                        Якийсь текст.Якийсь текст.Якийсь текст.
                    </p>
                </div>
            </div>
        </Col>
        <Col md="3">
            <h5 className="text-center mt-5">Категгорії</h5>

            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>категорія 1</ListGroup.Item>
                    <ListGroup.Item>категорія 2</ListGroup.Item>
                    <ListGroup.Item>категорія 3</ListGroup.Item>
                    <ListGroup.Item>категорія 4</ListGroup.Item>
                    <ListGroup.Item>категорія 5</ListGroup.Item>
                </ListGroup>
            </Card>
        
        </Col>
      </Row>
    )
  }
}







// import React, { Component } from 'react'
// import { Container, Row, Col, Card } from 'react-bootstrap'

// import JsLogo from "../assets/JavaScript-logo.png"

// export default class Blog extends Component {
//   render() {
//     return (
//       <Container>
//         <Row>
//             <Col md={9}>
//                 <card>
//                     <img
//                         className="mr-3"
//                         width={150}
//                         hight={150}
//                         src={JsLogo}
//                     />
//                     <Card.Body>
//                         <h5>Blog Post</h5>
//                         <p>
//                          Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
//                          Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
//                          Якийсь текст.Якийсь текст.Якийсь текст.
//                          Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.Якийсь текст.
//                         Якийсь текст.Якийсь текст.
//                         </p>
//                     </Card.Body>
//                 </card>
//             </Col>
//         </Row>
//       </Container>
//     )
//   }
// }
