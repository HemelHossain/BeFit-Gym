import React from 'react';

const BlogDetails = ({blog}) => {
    const {title,image, description1, description2, description3, description4, description5, description6, description7 } = blog;
    return (
        <div>
            <h1 className='text-2xl font-bold ml-28 mt-20'>{title}</h1>
            <img className='h-screen w-3/5 mt-12 mx-auto object-cover' src={image} alt="" />
            <div className='text-xl mt-24 ml-28 w-3/4'>
                <p className='mb-7'>{description1}</p>
                <p className='mb-7'>{description2}</p>
                <p className='mb-7'>{description3}</p>
                <p className='mb-7'>{description4}</p>
                <p className='mb-7'>{description5}</p>
                <p className='mb-7'>{description6}</p>
                <p className='mb-7'>{description7}</p>
            </div>
            
        </div>
    );
};

export default BlogDetails;