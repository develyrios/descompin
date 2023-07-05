import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CardComponent = ({ image, title, total, onClick }) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={image} alt="Card image" />

      <Card.ImgOverlay>
        <Button variant="primary" onClick={onClick}>
        Profile <Badge bg="secondary">{total}</Badge>
        </Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}