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

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'shop',
                element: <h2>This is shop component</h2>
            },
            {
                path: 'cart',
                element: <h2>This is cart component</h2>
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
