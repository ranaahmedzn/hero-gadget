import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/fakeDb';

const Shop = () => {
    const [cart, products] = useLoaderData()

    const handleAddToCart = (id) => {
        addToDb(id)
    }

    return (
        <div className='my-container'>
            <div className='product-container'>
                {
                    products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;