import Form from 'react-bootstrap/Form';
import { ModalComponent } from "../../components/Modal";
import { useState } from 'react';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction, saveFolderAction } from '../../store/actions';

export const ModalCreateFolder = ({ open }) => {
    const { dispatch } = useAppContext();
    const [folderName, setFolderName] = useState("");

    const handleClose = () => {
        dispatch(closeModalsAction());
    }

    const handleChange = (e) => {
        setFolderName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveFolderAction(dispatch, folderName);
        handleClose();
    }

    return (
        <ModalComponent 
            title="Criar pasta"
            open={open}
            onHide={handleClose}
            controls={[
                {
                    label: "Criar e salvar", 
                    variant: "secondary", 
                    isLoading: false, 
                    loadingLabel: "Criando...", 
                    type: "submit", 
                    form: "formCriarPasta"
                }
            ]}
        >
            <Form onSubmit={handleSubmit} id="formCriarPasta">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Lugares inspiradores" value={folderName} onChange={handleChange} />
                </Form.Group>
            </Form>
        </ModalComponent>
    )
}