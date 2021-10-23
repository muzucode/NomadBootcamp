import Button from "react-bootstrap/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import { TopNavBar } from "../../Globals/features/Top Nav Bar/TopNavBar";


export function LeftHalf(props){

  return (
    <div>
    <TopNavBar/>
    <Container className="leftHalf w-100 p-5">
      <h1 className="display-1 mb-5">{props.title}</h1>
      <h2>What you will learn:</h2>

      <ul className="mb-5">
        <li>Programming languages (HTML, CSS, JavaScript, Node.js, Vue.js)</li>
        <li>How to build a desktop web application</li>
        <li>How to deploy a desktop web application (Amazon Web Services)</li>
        <li>How to apply for development jobs</li>
      </ul>

      <h2>How you will learn:</h2>
      <ul className="mb-5">
        <li>6-month virtual program</li>
        <li>Weekly recorded lessons</li>
        <li>Industry expert seminars</li>
        <li>1-on-1 Q{'&'}As</li>
      </ul>

      <h2 className="mb-3">Getting started:</h2>
      <ul className="mb-5">
        <li>Apply for the program</li>
        <li>Verify that you meet the preqrequisites listed <a className="inlineLink" href="/prerequisites">here</a></li>
        <li>Fill out our 1-minute survey</li>
      </ul>
      <Button className="m-0" variant="primary" size="lg">Sign up!</Button>
    </Container>
    </div>

  )

}
