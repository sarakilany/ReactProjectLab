import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Shop = () => {
    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    const [products, setProducts] = useState([])
    return (
        <div className='row flex-row'>
            {
                products.map((item, i) => {
                    return (
                        <Link to={`/products/${item.id}`} key={i}  >
                            <div className='col-4 my-4'>
                                <h3>{item.title}</h3>
                                <img src={item.image} className='col-4 d-block' />
                                <p>{item.description}</p>
                                <h4>{item.price}</h4>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}