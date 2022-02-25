import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { id, title, image, price, catagory, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err", err);
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className='card'>
                    <div className='image'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='content'>
                        <div className='header'>{id}</div>
                        <div className='header'>{title}</div>
                        <div className='header'>{description}</div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductDetail;