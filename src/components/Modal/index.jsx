import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = ({ title, children, open, controls = [] }) => {

  return (
      <Modal show={open} onHide={() => {}}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>

        <Modal.Footer>
            {controls.map((control, controlIndex) => (
                <Button key={controlIndex} variant={control.variant} onClick={control.onClick}>
                    {control.label}
                </Button>
            ))}
        </Modal.Footer>
      </Modal>
  );
}