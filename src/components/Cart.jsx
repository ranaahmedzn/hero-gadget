import React, { useContext } from 'react';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)

    let totalPrice = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price * product.quantity;
    }

    

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 sm:p-10 space-y-4'>
                <h2 className='text-xl font-semibold'>
                    {
                        cart.length > 0 ? "Review Cart Items" : "Cart is Empty!"
                    }
                </h2>
                <ul className='divide-y divide-gray-700'>
                    {
                        cart.map(product => <CartItem
                        key={product.id}
                        product={product}
                        ></CartItem>)
                    }
                </ul>
                <div className='text-right'>
                    <p>Total amount: ${totalPrice}</p>
                    <p className='text-gray-400'><small>Not including taxes and shipping costs</small></p>
                </div>
                <div className='text-right'>
                    {
                        cart.length > 0 
                        ? <button className='btn-outlined'>Clear Cart</button>
                        : <Link to="/shop"><button className='btn-outlined'>Back To Shop</button></Link>
                    }
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;