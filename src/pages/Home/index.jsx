import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from '../../containers/ModalSavePin';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder';
import { Notification } from '../../components/Notification';
import { CardContainer } from '../../containers/CardContainer';
import { useAppContext } from '../../store/AppContext';
import { SAVE_FOLDER_SUCCESS_TYPE } from '../../store/types';

export const Home = () => {
    const { state, dispatch} = useAppContext();

    const [ showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (state.type === SAVE_FOLDER_SUCCESS_TYPE) {
            setShowFeedback(true);
        }
    }, [state.type])

    return (
    <>
        <ModalSavePin open={state.mode === 'savePin'} />
        <ModalCreateFolder open={state.mode === 'createFolder'} />

        {showFeedback === true && (
            <Notification 
                message="Criado com sucesso!"
                onClose={() => setShowFeedback(false)}
            />
        )}

        <Container fluid>
            <Row>
                <Col xs={12} md={2}>
                    <CardContainer 
                        id="123"
                        title="Título do Card" 
                        image="https://picsum.photos/200/300?53" 
                        total={0} 
                    />
                </Col>

                <Col xs={12} md={2}>
                    <CardContainer 
                        id="456"
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