import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Main/Layout';
import Home from '../../Pages/Home/Home';
import AllService from '../../Pages/Services/AllServices';
import Products from '../../Pages/Products/Products';
import Blogs from '../../Pages/Blogs/Blogs';
import LogIn from '../../Pages/LogIn/LogIn';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ServiceDetail from '../../Pages/Shared/ServiceDetail/ServiceDetail';
import NotFound from '../../Pages/404Page/NotFound';

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
                loader: () => fetch('https://befit-gym-server.vercel.app/service'),
                element: <PrivateRoute><AllService></AllService></PrivateRoute>
            },
            {
                path: '/service/:id',
                element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://befit-gym-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/supplements',
                loader: () => fetch('https://befit-gym-server.vercel.app/product'),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/blog',
                loader: () => fetch('https://befit-gym-server.vercel.app/blog'),
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])