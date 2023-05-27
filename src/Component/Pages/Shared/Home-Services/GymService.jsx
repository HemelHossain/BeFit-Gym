import React from 'react';
import { Link } from 'react-router-dom';

const service = ({ serve }) => {
    const { title, description, Image } = serve;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl sm:mb-8">
                <figure><img className='w-full h-64 object-cover' src={Image} alt="Shoes" /></figure>
                <div className="card-body ms-3">
                    <h2 className="card-title text-2xl">
                        {title}    
                    </h2>
                    <p>{
                        description?.length > 100 ? <span>{description.slice(0, 150) + '...'}<Link className='text-red-600'> Read More</Link></span> : <span>{description}</span>
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default service;