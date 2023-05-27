import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Main/Layout';
import Home from '../../Pages/Home/Home';
import AllService from '../../Pages/Services/AllServices';
import Products from '../../Pages/Products/Products';
import Blogs from '../../Pages/Blogs/Blogs';
import LogIn from '../../Pages/LogIn/LogIn';
import SignUp from '../../Pages/SignUp/SignUp';

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                loader: () => fetch('http://localhost:5000/service'),
                element: <AllService></AllService>
            },
            {
                path: '/supplements',
                loader: () => fetch('http://localhost:5000/product'),
                element: <Products></Products>
            },
            {
                path: '/blog',
                loader: () => fetch('http://localhost:5000/blog'),
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }]
    }
])