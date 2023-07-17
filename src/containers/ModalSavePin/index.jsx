import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalComponent } from '../../components/Modal';
import { ButtonComponent } from '../../components/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction, fetchFoldersAction, openModalCreateFolder } from '../../store/actions';
import { useEffect } from 'react';

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();

    const handleClose = () => {
        dispatch(closeModalsAction());
    }

    const handleClickCreateFolder = () => {
        dispatch(openModalCreateFolder());
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
                isLoading: false,
                loadingLabel: "Criando...",
                onClick: handleClickCreateFolder,
            }
        ]}
    >
        <ListGroup variant="flush">
            {state.folders.map((folder, folderIndex) => (
                <ListGroup.Item key={folderIndex}>
                    <Row>
                        <Col xs={8}>{folder.name}</Col>
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