import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalComponent } from '../../components/Modal';
import { ButtonComponent } from '../../components/Button';
import { useAppContext } from '../../store/AppContext';
import { 
    closeModalsAction, 
    fetchFoldersAction, 
    openModalCreateFolder, 
    savePinInFolderAction
} from '../../store/actions';
import { useEffect } from 'react';

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();

    const handleClose = () => {
        dispatch(closeModalsAction());
    }

    const handleClickCreateFolder = () => {
        dispatch(openModalCreateFolder());
    }

    const handleClickSavePinInFolder = (folderId) => {
        savePinInFolderAction(dispatch, state.activePinId, folderId);
    }

    useEffect(() => {
        fetchFoldersAction(dispatch);
    }, [])

    const foldersNormalized = state.folders.map(folder => {
        return ({
            ...folder,
            saved: folder.pins.includes(state.activePinId),
        })
    })

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
            {foldersNormalized.map((folder, folderIndex) => (
                <ListGroup.Item key={folderIndex}>
                    <Row>
                        <Col xs={8}>{folder.name}</Col>
                        <Col xs={4} className="text-end">
                            <ButtonComponent 
                                label={folder.saved ? "Salvo" : "Salvar"} 
                                loadingLabel="Salvando" 
                                variant={folder.saved ? "secondary" : "primary"} 
                                disabled={folder.saved}
                                onClick={() => handleClickSavePinInFolder(folder.id)} 
                            />
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </ModalComponent>
  );
}