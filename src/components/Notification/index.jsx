import { createPortal } from 'react-dom';
import Alert from 'react-bootstrap/Alert';
import './style.css';

export const Notification = ({ message, variant = "success", onClose }) => {
    return (
        <>
        {createPortal(
            <div className="notification">
                <Alert variant={variant} onClose={onClose} dismissible>
                    {message}
                </Alert>
            </div>,
            document.body
        )}
        </>
    )
}