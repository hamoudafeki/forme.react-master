import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cards = () => {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://promo.com/tools/image-resizer/static/Pattern_image-8c050053eab884e51b8599607865d112.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <br/>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://promo.com/tools/image-resizer/static/Pattern_image-8c050053eab884e51b8599607865d112.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <br/>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://promo.com/tools/image-resizer/static/Pattern_image-8c050053eab884e51b8599607865d112.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
