import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const ButtonComponent = ({ isLoading, label, loadingLabel, ...buttonProps }) => {
    return (
        <Button {...buttonProps}>
            {
                isLoading && (
                <>
                <Spinner
                    as="span" 
                    animation="border" 
                    size="sm" 
                    role="status" 
                    aria-hidden="true" 
                >
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>{' '}
                </>
            )}

            {isLoading ? loadingLabel : label}
        </Button>
    )
}