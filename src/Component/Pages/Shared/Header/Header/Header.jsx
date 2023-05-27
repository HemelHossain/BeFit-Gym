import React, { useState } from 'react';
import Carosel from '../Carousel/Carosel';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <div className=''>
                <nav className='w-full bg-black'>
                    <div className='justify-between px-4 mx-auto md:mx-16 lg:max-w-7xl items-center md:flex '>
                        <div>
                            <div className='flex justify-between items-center py-3 md:py-5 md:block'>
                                <Link>
                                    <h2 className='text-white text-2xl md:text-3xl font-bold'>BeFit</h2>
                                </Link>
                                <div className='md:hidden'>
                                    <button onClick={() => setNavbar
                                        (!navbar)}>
                                        {
                                            navbar ? <HiOutlineX className='w-6 h-7 pt-1 text-white' /> : <HiMenuAlt3 className='w-6 h-7 pt-1 text-white' />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={` justify-self-center pb-3  mt-6 md:block md:mt-0 md:pb-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className='items-center justify-center sm:mb-4 md:flex space-y-8 md:space-y-0 md:space-x-6'>
                                <li className='text-white hover:text-blue-300'><Link to='/'>Home</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/service'>Service</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/blog'>Blog</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/supplements'>Supplements</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/signup'>Sign up</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/login'>Login</Link></li>
                                <li className='text-white hover:text-blue-300'>Contact</li>
                            </ul>
                        </div>

                    </div>

                </nav>

            </div>
            <Carosel></Carosel>
        </div>
    )
};

export default Header;