import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          className='card-img-top product-img'
          alt={product.name}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>{product.price} L.E</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
