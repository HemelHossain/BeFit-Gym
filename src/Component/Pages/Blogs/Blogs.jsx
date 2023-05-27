import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    const blogg = useLoaderData();
    return (
        <div className='mt-32'>
            <h1 className='text-3xl font-bold text-center'>Maximizing Your Gym Experience: Tips for Success and Long-Term Results
            </h1>
            <p className='mt-16 text-xl ml-28 w-3/4'>Welcome to our gym's blog section, where we are dedicated to providing you with valuable insights, tips, and inspiration to help you maximize your gym experience. We understand that embarking on a fitness journey can be both exciting and challenging, and we're here to support you every step of the way. In this blog post, we'll share essential tips for success and achieving long-term results in the gym. Let's dive in!</p>

            <div>
                {
                    blogg.map(blog => <BlogDetails key={blog.id} blog={blog}></BlogDetails>)
                }
                
            </div>

        </div>
    );
};

export default Blogs;