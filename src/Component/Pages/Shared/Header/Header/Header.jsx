import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { users, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <div>
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
                        <div className={` justify-self-center pb-2  mt-6 md:block md:mt-0 md:pb-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className='items-center justify-center md:mb-0 sm:mb-4 md:flex space-y-7 md:space-y-0 md:space-x-6'>
                                <li className='text-white hover:text-blue-300'><Link to='/'>Home</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/service'>Service</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/blog'>Blog</Link></li>
                                <li className='text-white hover:text-blue-300'><Link to='/supplements'>Supplements</Link></li>
                                <>
                                    {
                                        users?.uid ?
                                            <>
                                                <li  className='text-white hover:text-blue-300 mt-1 h-7 w-7'><img className='rounded-full' src={users.photoURL}  alt="" /></li>
                                                <li onClick={handleLogOut} className='text-white hover:text-blue-300'><button>Logout</button></li>

                                            </>
                                            :

                                            <>
                                                <li className='text-white hover:text-blue-300'><Link to='/signup'>Sign up</Link></li>
                                                <li className='text-white hover:text-blue-300'><Link to='/login'>Login</Link></li>
                                            </>
                                    }
                                </>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Header;