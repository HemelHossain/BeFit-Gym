import React from 'react';
import { Link } from 'react-router-dom';

const service = ({ serve }) => {
    const { title, description, Image, id } = serve;
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl sm:mb-8 xs:mb-8">
                <figure><img className='w-full h-64 object-cover' src={Image} alt="Shoes" /></figure>
                <div className="card-body ms-3 mt-2">
                    <h2 className="card-title text-2xl">
                        {title}    
                    </h2>
                    <p className='pb-4'>{
                        description?.length > 100 ? <span>{description.slice(0, 150) + '...'}<Link to={`/service/${id}`} className='text-red-600'> Read More</Link></span> : <span>{description}</span>
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default service;