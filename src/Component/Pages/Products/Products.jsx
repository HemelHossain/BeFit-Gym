import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GymProducts from '../Shared/Home-Services/GymProducts';

const Products = () => {
    const product = useLoaderData();
    return (
        <div className='mt-32'>
            <h1 className='text-center text-3xl font-bold'>Fuel Your Fitness Journey with Our Supplements</h1>
            <p className='text-center md:mx-40 mt-10 text-xl'>Supplements offer a convenient, effective, and personalized way to support your fitness journey. Explore our supplement section to find the perfect fit for your fitness goals.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20'>
                {
                    product.map(prod => <GymProducts key={prod
                        .id} prod={prod}></GymProducts>)
                }
            </div>
        </div>
    );
};

export default Products;