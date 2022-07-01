import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from '../../redux/features/shopSlice';
export const Shop = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        // fetchProducts();
    }, [])

    // const fetchProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setProducts(json))
    // }
    //fetch api from redux toolkit
    // const { image, title, description, category, price } = product;
    //gloal state
    // const [products, setProducts] = useState([])
    // const reduxProducts = useSelector(state => state.shopSlice)
    const products = useSelector(state => state.shopSlice.products);
    console.log("here", products);
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