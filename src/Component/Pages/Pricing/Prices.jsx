import React from 'react';
import "./Prices.css"

const Prices = () => {
    return (
        <div className='mt-44'>
            <h1 className='text-center text-5xl font-bold'>CHOOSE YOUR PRICING PLAN</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20'>
                <div className="card w-96 bg-base-100 rounded-none shadow-xl mx-auto md:w-10/12 sm:w-3/4 mb-9">
                    <figure>
                        <div className='bg-black text-white text-center px-10 py-14'>
                            <h4 className='text-xl'>Basic</h4>
                            <h1 className='text-5xl font-bold'>$ 29.00</h1>
                            <p>/Per Month</p>
                        </div>
                    </figure>
                    <div className="card-body text-center text-slate-500 lineHeight mt-6">
                        <p><del>Free Hand</del></p>
                        <p>Gym Fitness</p>
                        <p><del>Weight loss </del></p>
                        <p><del>Outsanding</del></p>
                        <p>Personal Trainer</p>
                        <button className='mt-5 mb-5 text-xl bg-red-600 px-8 py-3 text-white'>---  Purchase Plan</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-none shadow-xl md:w-10/12 sm:w-3/4 mx-auto mb-9">
                    <figure>
                        <div className='bg-red-600 text-white text-center px-10 py-14'>
                            <h4 className='text-xl'>Standard</h4>
                            <h1 className='text-5xl font-bold'>$ 49.00</h1>
                            <p>/Per Month</p>
                        </div>
                    </figure>
                    <div className="card-body text-center text-slate-500 lineHeight mt-6">
                        <p>Free Hand</p>
                        <p>Gym Fitness</p>
                        <p><del>Weight loss </del></p>
                        <p><del>Outsanding</del></p>
                        <p>Personal Trainer</p>
                        <button className='mt-5 mb-5 text-xl bg-red-600 px-8 py-3 text-white'>---  Purchase Plan</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 rounded-none shadow-xl md:w-10/12 sm:w-3/4 mx-auto mb-9">
                    <figure>
                        <div className='bg-black text-white text-center px-10 py-14'>
                            <h4 className='text-xl'>Premium</h4>
                            <h1 className='text-5xl font-bold'>$ 99.00</h1>
                            <p>/Per Month</p>
                        </div>
                    </figure>
                    <div className="card-body text-center text-slate-500 lineHeight mt-6">
                        <p>Free Hand</p>
                        <p>Gym Fitness</p>
                        <p>Weight loss</p>
                        <p>Outsanding</p>
                        <p>Personal Trainer</p>
                        <button className='mt-5 mb-5 text-xl bg-red-600 px-8 py-3 text-white'>---  Purchase Plan</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Prices;