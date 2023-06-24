import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardComponent } from '../../components/Card';
import { ModalSavePin } from '../../containers/ModalSavePin';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder';
import { Notification } from '../../components/Notification';

export const Home = () => {
    return (
    <>
        <ModalSavePin open={false} />
        <ModalCreateFolder open={false} />

        <Notification 
            message="Criado com sucesso!"
            onClose={() => console.log("Clicou em fechar")}
        />

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