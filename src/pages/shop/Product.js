import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export const Product = () => {
    const { id } = useParams();
    useEffect(() => {
        fetchProduct();
    }, [])
    const [product, setProduct] = useState({})
    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>)


}