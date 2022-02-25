import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductComponent.css';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];

    const renderList = products.map((product) => {
        const { id, title, image, price, catagory } = product;
        return (
            <div className='column'>
                <Link to={`/product/${id}`}>
                    <div className='cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{id}</div>
                                <div className='header'>{title}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return (
        <>{renderList}</>
    );
};

export default ProductComponent;