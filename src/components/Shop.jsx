import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addToDb} from '../utilities/fakeDb';
import { CartContext, ProductsContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(ProductsContext)
    const [cart, setCart] = useContext(CartContext)

    const handleAddToCart = (product) => {
        let newCart = []

        const exists = cart.find(pd => pd.id === product.id)

        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const rest = cart.filter(pd => pd.id !== exists.id)
            newCart = [...rest, exists]
        }

        addToDb(product.id)
        setCart(newCart)
        toast.success("Product Added!🛒")
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