import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/fakeDb';
import { ProductsContext } from '../App';

const Shop = () => {
    const products = useContext(ProductsContext)

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