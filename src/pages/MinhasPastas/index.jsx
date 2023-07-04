import Container from 'react-bootstrap/Container';
import { ListGroupComponent } from '../../components/ListGroup';

export const MinhasPastasPage = () => {
    return (
        <Container>
            <ListGroupComponent 
                items={[
                    {
                        title: "Pasta 1",
                        total: 3
                    },
                    {
                        title: "Pasta 2",
                        total: 10
                    },
                    {
                        title: "Pasta 3",
                    },
                ]}
            />
        </Container>
    )
}