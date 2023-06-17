import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const ButtonComponent = ({ variant, isDisabled, onClick, isLoading, label, loadingLabel }) => {
    return (
        <Button variant={variant} disabled={isDisabled} onClick={onClick}>
            {
                isLoading && (
                <>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                ><span className="visually-hidden">Carregando...</span></Spinner>{' '}
                </>
            )}

            {isLoading ? loadingLabel : label}
        </Button>
    )
}