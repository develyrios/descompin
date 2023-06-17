import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalComponent } from '../../components/Modal';
import { ButtonComponent } from '../../components/Button';

export const ModalSavePin = ({ open }) => {
  return (
    <ModalComponent 
        title="Salvar pin"
        open={open}
        controls={[
            {
                label: "Criar pasta",
                variant: "primary",
                isDisabled: false,
                onClick: () => {
                    console.log("Criou a pasta!");
                },
                isLoading: false,
                loadingLabel: "Criando...",
            }
        ]}
    >
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                    <Col xs={8}>
                        Item da Lista
                    </Col>
                    <Col xs={4} className="text-end">
                        <ButtonComponent 
                            label="Salvar" 
                            loadingLabel="Salvando"
                        />
                    </Col>
                </Row>
            </ListGroup.Item>
            
            <ListGroup.Item>
                <Row>
                    <Col xs={8}>
                        Item da Lista
                    </Col>
                    <Col xs={4} className="text-end">
                        <ButtonComponent 
                            label="Salvar" 
                            loadingLabel="Salvando"
                        />
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    </ModalComponent>
  );
}