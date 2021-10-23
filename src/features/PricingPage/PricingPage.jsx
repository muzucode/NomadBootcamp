import { Col, Container, Row } from "react-bootstrap";
import { LeftHalf } from "./components/LeftHalf";
import { RightHalf } from "./components/RightHalf";


export function PricingPage() {
    return (
      <Container fluid className="p-0 m-0">

      {/* Two halves */}
      <Row className="w-100 p-0 m-0">

        <Col className="w-50 p-0 m-0" >
          <LeftHalf
            title="Pricing"
            description=""
            variant="primary"
          />
        </Col>

        <Col className="w-50 p-0 m-0" >
          <RightHalf
            title="What we look for"
            description=""
          />
        </Col>

      </Row>
    </Container>
    );  
}
