import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { useParams, Link } from 'react-router-dom';

//return products main page
const Product = ({ product }) => {
  return (
    <Card className="h-100">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <div>
          {/* Link stops the reload,works faster */}
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
        </div>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="orange"
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
