import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const ProductsContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const [cartData, productsData] = useLoaderData()
  const [cart, setCart] = useState(cartData);

  return (
    <ProductsContext.Provider value={productsData}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
          <div className='min-h-[calc(100vh-157px)]'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default App;