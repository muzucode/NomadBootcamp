import { Col, Container, Row } from "react-bootstrap";
import './styles/styles.css';
import { TopNavBar } from "../Globals/features/Top Nav Bar/TopNavBar";

export function DemoPage() {
    return (
      <Container fluid className="p-0 m-0 main">
        <TopNavBar/>
      </Container>
    );  
}
