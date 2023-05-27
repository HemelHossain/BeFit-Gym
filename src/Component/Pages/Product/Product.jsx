import React, { useEffect, useState } from 'react';
import GymProducts from '../Shared/Home-Services/GymProducts';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='mt-40'>
            <h1 className='text-center text-3xl font-bold'>Fuel Your Fitness Journey with Our Supplements</h1>
            <p className='text-center md:mx-40 mt-10 text-xl'>Supplements offer a convenient, effective, and personalized way to support your fitness journey. Explore our supplement section to find the perfect fit for your fitness goals.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20'>
                {
                    product.slice(0, 6).map(prod => <GymProducts key={prod
                        .id} prod={prod}></GymProducts>)
                }
            </div>
        </div>
    );
};

export default Product;