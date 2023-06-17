import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CardComponent = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://picsum.photos/200/300?53" alt="Card image" />

      <Card.ImgOverlay>
        <Button variant="primary">
        Profile <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
        </Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>Título do Card</Card.Title>
      </Card.Body>
    </Card>
  );
}