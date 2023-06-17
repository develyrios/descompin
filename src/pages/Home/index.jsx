import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardComponent } from '../../components/Card';
import { ModalComponent } from '../../components/Modal';

export const Home = () => {
    return (
    <>
        <ModalComponent 
            title="Título do modal" 
            open={true} 
            controls={[
                {
                    label: "Fechar",
                    variant: "secondary",
                    onClick: () => {
                        console.log("Fechou!");
                    }
                },
                {
                    label: "Criar pasta",
                    variant: "primary",
                    onClick: () => {
                        console.log("Criou a pasta!");
                    }
                }
            ]}
        >
            <p>Conteúdo do modal</p>
        </ModalComponent>

        <Container fluid>
            <Row>
                <Col xs={12} md={2}>
                    <CardComponent 
                        title="Título do Card" 
                        image="https://picsum.photos/200/300?53" 
                        total={0} 
                    />
                </Col>

                <Col xs={12} md={2}>
                    <CardComponent 
                        title="Título do Card" 
                        image="https://picsum.photos/200/300?13" 
                        total={1} 
                    />
                </Col>
            </Row>
        </Container>
    </>
    )
}