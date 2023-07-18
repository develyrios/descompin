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

const pinsData = [
    {
        id: "123",
        title: "Pin Teste 1",
        image: "https://picsum.photos/200/300?53",
        total: 0,
    },
    {
        id: "456",
        title: "Pin Teste 2",
        image: "https://picsum.photos/200/300?13",
        total: 0,
    },
    {
        id: "789",
        title: "Pin Teste 3",
        image: "https://picsum.photos/200/300?37",
        total: 0,
    },
];

export const Home = () => {
    const { state, dispatch} = useAppContext();

    const [ showFeedback, setShowFeedback] = useState(false);

    const pinsNormalized = pinsData.map(pin => ({
        ...pin,
        total: state.folders.filter(folder => (
            folder.pins.includes(pin.id)
        )).length
    }));

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