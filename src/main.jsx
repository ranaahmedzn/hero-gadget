import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import productsAndCartData from './loaders/getCart&ProductsData';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />,
                loader: productsAndCartData
            },
            {
                path: 'cart',
                element: <Cart />,
                loader: productsAndCartData
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
