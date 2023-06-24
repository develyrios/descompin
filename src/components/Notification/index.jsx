import { createPortal } from 'react-dom';
import Alert from 'react-bootstrap/Alert';
import './style.css';

export const Notification = (props) => {
    return (
        <>
        {createPortal(
            <div className="notification">
                <Alert variant={props.variant} onClose={props.onClose} dismissible>
                    {props.message}
                </Alert>
            </div>,
            document.body
        )}
        </>
    )
}