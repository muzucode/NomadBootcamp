import Button from "react-bootstrap/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopNavBar } from "../../Globals/features/Top Nav Bar/TopNavBar";
import '../styles/styles.css'
import LoremIpsum from "../../../utilities/LoremIpsum/LoremIpsum";


export function LeftHalf(props){


  return (
    <div>
    <TopNavBar/>
    <Container className="leftHalf w-100 p-5">
      <h1 className="display-1 mb-5">{props.title}</h1>

      {/* Apply form */}
      <Container className="p-0">
        <Row>
          <Col sm={12}><h2>Phone:</h2></Col>
        </Row>        
        <Row className="mb-4">
          <Col sm={7}><p><i>(123) 456-7890</i></p></Col>
        </Row>        
        
        <Row>
          <Col sm={12}><h2>Email:</h2></Col>
        </Row>        
        <Row className="mb-4">
          <Col sm={7}><p><i>snowboot@snowboot.com</i></p></Col>
        </Row>
        
        <Row>
          <Col sm={12}><h2>Send us a message:</h2></Col>
        </Row>        
        <Row>
          <Col sm={5}><Button className="m-0 w-100 mt-3" variant="primary" size="lg">Send a message</Button></Col>
        </Row>

      </Container>

      {/* Divider */}
      <div className="divRule my-5"></div>

      <Container  className="p-0">
        <Row>
          <Col sm={12}><h2>Availability</h2></Col>
        </Row>
        <Row>
          <Col sm={12}><p>{LoremIpsum(2)}</p></Col>
        </Row>
      </Container>

    </Container>
    </div>

  )

}
