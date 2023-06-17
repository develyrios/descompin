import { CardComponent } from '../../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={2}> <CardComponent /> </Col>
                <Col xs={12} md={2}> <CardComponent /> </Col>
                <Col xs={12} md={2}> <CardComponent /> </Col>
                <Col xs={12} md={2}> <CardComponent /> </Col>
            </Row>
        </Container>
    )
}