import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalComponent } from '../../components/Modal';
import { ButtonComponent } from '../../components/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction, fetchFoldersAction } from '../../store/actions';
import { useEffect } from 'react';

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();

    const handleClose = () => {
        dispatch(closeModalsAction())
    }

    useEffect(() => {
        fetchFoldersAction(dispatch);
    }, [])

  return (
    <ModalComponent 
        title="Salvar pin"
        open={open}
        onHide={handleClose}
        controls={[
            {
                label: "Criar pasta",
                variant: "secondary",
                onClick: () => {
                },
                isLoading: false,
                loadingLabel: "Criando...",
            }
        ]}
    >
        <ListGroup variant="flush">
            {state.folders.map((folder, folderIndex) => (
                <ListGroup.Item key={folderIndex}>
                    <Row>
                        <Col xs={8}>{folder.name} - Id:{folder.id}</Col>
                        <Col xs={4} className="text-end">
                            <ButtonComponent 
                                label="Salvar" 
                                loadingLabel="Salvando"
                            />
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </ModalComponent>
  );
}