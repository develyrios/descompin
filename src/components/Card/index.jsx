import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CardComponent = ({ image, title, total, onClick, id }) => {
  return (
    <Card border="light" bg="secondary" text="white">
      <Card.Img src={image} alt="Card image" />

      <Card.ImgOverlay>
        <Button variant="primary" text="white" onClick={() => onClick(id)}>
        Salvar pin <Badge bg="white" text="primary">{total}</Badge>
        </Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}