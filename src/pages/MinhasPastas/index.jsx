import Container from 'react-bootstrap/Container';
import { ListGroupComponent } from '../../components/ListGroup';
import { useAppContext } from '../../store/AppContext';

const adapterItems = (items) => {
    return items.map(item => ({
        title: item.name,
        total: item.pins.length,
    }))
}

export const MinhasPastasPage = () => {
    const { state } = useAppContext();

    return (
        <Container>
            <ListGroupComponent items={adapterItems(state.folders)} />
        </Container>
    )
}