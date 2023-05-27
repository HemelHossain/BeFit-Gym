import React from 'react';
import { FaCheckDouble } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='flex md:flex-row sm:flex-col-reverse md:mx-5 mt-40'>
            <div className='w-2/4 mt-5 md:text-left sm:mx-auto sm:text-center'>
                <h1 className='text-5xl font-bold'>THE BEST THING IN TRANING</h1>
                <p className='mt-4 mr-4'>Training is a transformative journey that extends beyond physical fitness. It holds the power to unlock your inner strength, push boundaries, and help you become the best version of yourself. Get ready to dive into the incredible benefits that training can bring to your life.</p>
                <ul className='mt-10'>
                    <li className='mb-5 flex items-center'><FaCheckDouble className='text-red-400 mr-2' /> Empowerment and Self-Confidence</li>
                    <li className='mb-5 flex items-center'><FaCheckDouble className='text-red-400 mr-2' /> Mental Resilience and Discipline</li>
                    <li className='mb-5 flex items-center'><FaCheckDouble className='text-red-400 mr-2' /> Stress Relief and Mental Well-being</li>
                    <li className='mb-5 flex items-center'><FaCheckDouble className='text-red-400 mr-2' /> Goal Setting and Personal Growth</li>
                    <li className='flex items-center'><FaCheckDouble className='text-red-400 mr-2' /> Connection and Community</li>
                </ul>
                <button className='mt-5 text-xl bg-red-600 px-6 py-3 text-white'><Link to='/blog'>Explore Our Blogs</Link></button>
            </div>
            <div className='w-2/4 sm:mx-auto'>
                <img className='w-full' src="https://gymster.peacefulqode.com/wp-content/uploads/2020/07/se-2-3.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blog;