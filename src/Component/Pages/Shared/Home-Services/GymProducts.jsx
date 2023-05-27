import React from 'react';
import { FaStar } from "react-icons/fa"

const GymProducts = ({ prod }) => {
    const { image, title, rating, review, price } = prod;
    return (
        <div>
            <div className="card shadow-none w-96 bg-base-100 flex items-center mx-auto">
                <img src={image} className='w-36 h-32' alt="" />
                <div className="card-body">
                    <h2 className="font-bold">{title}</h2>
                    <div className='flex items-center'>
                        <p className='flex items-center'>{rating}</p>
                        <FaStar className='ml-1 text-yellow-500' />
                        <p className='ml-4'>({review})</p>
                    </div>
                    <p className='font-fold text-xl'>{price}</p>


                    <button className="font-bold text-red-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GymProducts;