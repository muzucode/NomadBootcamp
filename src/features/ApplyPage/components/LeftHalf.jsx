import Button from "react-bootstrap/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopNavBar } from "../../Globals/features/Top Nav Bar/TopNavBar";
import '../styles/styles.css'

export function LeftHalf(props){


  return (
    <div>
    <TopNavBar/>
    <Container className="leftHalf w-100 p-5">
      <h1 className="display-1 mb-5">{props.title}</h1>

      {/* Apply form */}
      <Container className="p-0">
        <Row>
          <Col sm={3}><h2>First Name</h2></Col>
          <Col sm={4}><input></input></Col>
        </Row>

        <Row>
          <Col sm={3}><h2>Last Name</h2></Col>
          <Col sm={4}><input></input></Col>
        </Row>

        <Row>
          <Col sm={3}><h2>Email</h2></Col>
          <Col sm={4}><input></input></Col>
        </Row>

        <Row>
          <Col sm={3}><h2>Resume</h2></Col>
          <Col sm={4}><input></input></Col>
        </Row>
      </Container>

      {/* Divider */}
      <div className="divRule my-5"></div>

      <Row>
        <Col>
          <h2>How we process your application</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>Your application is received after you click submit and then is viewed by the Nomad team within 5-7 work days.
            The team looks over your resume and identifies the traits listed to the right.  We are primarily looking to
            enroll individuals that are interested in starting their own businesses, autodidacts, and those looking
            to change career paths and one in the software development space.
          </p>
        </Col>
      </Row>

    </Container>
    </div>

  )

}
