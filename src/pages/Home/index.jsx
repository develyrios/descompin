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
import { fetchPinsAction } from '../../store/actions';

export const Home = () => {
    const { state, dispatch } = useAppContext();

    const [ showFeedback, setShowFeedback] = useState(false);

    const pinsNormalized = state.pins.map(pin => ({
        ...pin,
        total: state.folders.filter(folder => (
            folder.pins.includes(pin.id)
        )).length
    }));

    useEffect(() => {
        fetchPinsAction(dispatch);
      }, []);

    useEffect(() => {
        if (state.type === SAVE_FOLDER_SUCCESS_TYPE) {
            setShowFeedback(true);
        }
    }, [state.type]);

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
                {pinsNormalized.map(pin => (
                    <Col key={pin.id} xs={12} md={2}>
                        <CardContainer {...pin} />
                    </Col>
                ))}
            </Row>
        </Container>
    </>
    )
}