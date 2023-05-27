import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const SignUp = () => {
    return (
        <div>
            <div className='w-2/5 mx-auto my-24 '>
                <form className='bg-gray-100 shadow-lg w-full rounded-xl p-5' action="">
                    <h1 className='text-2xl text-center font-bold mb-4'>Create an Account</h1>
                    <div>
                        <label className='block text-base mb-1'>Name</label>
                        <input className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Full Name' type="text" />
                    </div>
                    <div>
                        <label className='block text-base mb-1'>Email</label>
                        <input className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Email' type="email" />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-1'>Password</label>
                        <input className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Password' type="password" />
                    </div>
                    <div className='mt-3 flex items-center justify-between w-full'>
                        <div>
                            <input className=' mr-1' type="checkbox" name="" id="" />
                            <label className='md:text-base sm:text-xs mb-1' htmlFor="">Rememmerd Me</label>
                        </div>
                        
                    </div>
                    <div className='mt-3'>
                        <p className='px-16 md:text-xl  font-bold rounded-xl bg-red-600 py-1 text-white text-center cursor-pointer'>Sign up</p>
                    </div>
                    <div className='grid grid-cols-3 items-center mt-3'>
                        <hr className='border-gray-500' />
                        <p className='text-center'>Or Sign up with</p>
                        <hr className='border-gray-500' />
                    </div>
                    <div className='flex gap-2 justify-center mt-4 mx-auto'>
                        <p className='text-red-600 border-red-300 border-2 rounded p-3 w-11'><FaGoogle value={{ size: 28 }} /></p>
                        <p className='text-red-600 border-red-300 border-2 rounded p-3 w-11'><FaFacebookF value={{ size: 28 }} /></p>
                        <p className='text-red-600 border-red-300 border-2 rounded p-3 w-11'><FaTwitter value={{ size: 28 }} /></p>
                        <p className='text-red-600 border-red-300 border-2 rounded p-3 w-11'><FaGithub value={{ size: 28 }} /></p>
                    </div>
                    <div>
                        <p className='text text-center mt-3'>Already have an account <Link className='text-red-500' to='/login'>Login</Link></p>
                    </div>




                </form>
            </div>

        </div>
    );
};

export default SignUp;