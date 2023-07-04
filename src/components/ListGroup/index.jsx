import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export const ListGroupComponent = ({ items = [] }) => {
  return (
    <ListGroup as="ul">
        {items.map(item => (
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold"> {item.title} </div>
                </div>

                {
                    item.total ? (
                    <Badge bg="primary" pill>
                        {item.total}
                    </Badge>
                    ) : null
                }
            </ListGroup.Item>
        ))}
    </ListGroup>
  );
}