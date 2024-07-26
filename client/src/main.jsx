import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomePage from './components/Pages/HomePage'
import SingleProductPage from './components/SingleProductPage'

import { Provider } from 'react-redux';

import store from './redux/store';


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <HomePage />,
  },

  {
    path: "/testimonials",
    element: <HomePage />,
  },

  {
    path: "/products",
    element: <HomePage />,
    children: [{
      path: "/products/singleProduct/:id",
      element: <SingleProductPage />
    }]

  },

  {
    path: "/blogs",
    element: <HomePage />,
  },

  {
    path: "/contact",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <HomePage />,
  },

  {
    path: "/testimonials",
    element: <HomePage />,
  },

  {
    path: "/signup",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <HomePage />,
  }




])

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <RouterProvider router={router} />
 </Provider>
   


)
