import Modal from 'react-bootstrap/Modal';
import { ButtonComponent } from '../Button';

export const ModalComponent = ({ title, children, open, controls = [], }) => {

  return (
      <Modal show={open} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
            {controls.map((control, controlIndex) => (
                <ButtonComponent 
                    key={controlIndex} 
                    {...control} 
                />
            ))}
        </Modal.Footer>
      </Modal>
  );
}