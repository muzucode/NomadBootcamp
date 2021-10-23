import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LeftHalf } from "./components/LeftHalf";
import { RightHalf } from "./components/RightHalf";
import './styles/styles.css';


export function LandingPage(){

  return (
    <Container fluid className="p-0 m-0">

      {/* Two halves */}
      <Row className="w-100 p-0 m-0">

        <Col className="w-50 p-0 m-0" >
          <LeftHalf
            title="Snowboot"
            description=""
            variant="primary"
          />
        </Col>

        <Col className="w-50 p-0 m-0" >
          <RightHalf
            title="Our story..."
            description=""
          />
        </Col>

      </Row>
    </Container>
  )

}
