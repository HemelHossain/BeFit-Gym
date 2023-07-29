import React from 'react';
import { useLoaderData } from 'react-router-dom';


                            // Single Service Detail
const ServiceDetail = () => {

    const { Image, title, description } = useLoaderData();
    return (
        <div>
            <div className='mt-16'>
                <div className="card md:w-2/4 sm:w-96 bg-base-100 shadow-xl sm:mb-8 mx-auto">
                    <figure><img className='w-full sm:h-64 md:h-80 object-cover' src={Image} alt="Shoes" /></figure>
                    <div className="card-body ms-3 mx-3 pb-4 md:mt-2">
                        <h2 className="card-title text-2xl">
                            {title}
                        </h2>
                        <p className='text-justify mt-2'>{description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetail;