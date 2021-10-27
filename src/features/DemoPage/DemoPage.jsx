import { Col, Container, Row } from "react-bootstrap";
import './styles/styles.css';
import { TopNavBar } from "../Globals/features/Top Nav Bar/TopNavBar";

export function DemoPage() {

  const renderVideo = () => {
    return (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jrKcJxF0lAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
  }

    return (
      <div>
      <TopNavBar/>
        <Container fluid className="main p-5">
          <Row className="p-0 m-0">
            <Col className="p-0 m-0"><h1 className="display-1 mb-5">Free Demo</h1></Col>
          </Row>
          <Row className="p-0 m-0">
            <Col className="p-0 m-0">{renderVideo()}</Col>
          </Row>
          <Row className="p-0 m-0">
            <Col className="p-0 m-0">{renderVideo()}</Col>
          </Row>
        </Container>
      </div>

    );  
}
