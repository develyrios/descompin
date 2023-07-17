import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from '../../containers/ModalSavePin';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder';
import { Notification } from '../../components/Notification';
import { CardContainer } from '../../containers/CardContainer';
import { useAppContext } from '../../store/AppContext';

export const Home = () => {
    const { state, dispatch} = useAppContext();

    return (
    <>
        <ModalSavePin open={state.mode === 'savePin'} />
        <ModalCreateFolder open={state.mode === 'createFolder'} />

        <Notification 
            message="Criado com sucesso!"
            onClose={() => console.log("Clicou em fechar")}
        />

        <Container fluid>
            <Row>
                <Col xs={12} md={2}>
                    <CardContainer 
                        title="Título do Card" 
                        image="https://picsum.photos/200/300?53" 
                        total={0} 
                    />
                </Col>

                <Col xs={12} md={2}>
                    <CardContainer 
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