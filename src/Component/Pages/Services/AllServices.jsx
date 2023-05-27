import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GymService from '../Shared/Home-Services/GymService'
const AllServices = () => {
    const allService = useLoaderData();
    return (
        <div className='mt-24'>
            <h1 className='text-5xl text-center font-bold'>PUSH YOUR LIMITS FORWARD</h1>
            <p className='text-center text-xl md:mx-60 mt-8'>Train with the best experts in bodybuilding field. Your results will speak to themselves. Try the latest exercising trends, innovative equipment and special nutrition plans.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-24'>
                {
                    allService.map(serve => <GymService key={serve
                        .id} serve={serve}></GymService>)
                }
            </div>
        </div>
    );
};

export default AllServices;