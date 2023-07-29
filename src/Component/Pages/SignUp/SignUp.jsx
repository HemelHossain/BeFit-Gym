import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast, {Toaster} from 'react-hot-toast';

const SignUp = () => {
    const {createUser, profileUpdate ,emailVerification} = useContext(AuthContext);

    const handleSignUp = (event) =>{
        event.preventDefault();
        const  form = event.target;
        const name = form.name.value;
        const URL = form.URL.value;
        const email = form.email.value;
        const password = form.password.value;


        //    Email Password Sign in 
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpdateProfile(name, URL);
            handleEmailVerification();
            toast.success('Verify Your Email');
        })
        .catch(error => {
            console.error(error)
        });

        
    }
                // User Update 
    const handleUpdateProfile = (name, URL) =>{

        const profile = {
            displayName: name,
            photoURL: URL
        }
        profileUpdate(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    
                //  Email Verification 
    const handleEmailVerification = () =>{
        emailVerification()
            .then(() => {})
            .catch(error => {
                console.error(error);
            })
    }
    

    
    return (
        <div>
            <div className='w-2/5 mx-auto my-24 '>
                <form onSubmit={handleSignUp} className='bg-gray-100 shadow-lg w-full rounded-xl p-5' action="">
                    <h1 className='text-2xl text-center font-bold mb-4'>Create an Account</h1>
                    <div>
                        <label className='block text-base mb-1'>Name</label>
                        <input name='name' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Full Name' type="text" />
                    </div>
                    <div>
                        <label className='block text-base mb-1'>Photo URL</label>
                        <input name='URL' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Photo Url' type="url" />
                    </div>
                    <div>
                        <label className='block text-base mb-1'>Email</label>
                        <input name='email' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Email' type="email" />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-1'>Password</label>
                        <input name='password' className='bg-white w-full p-2 text-base border px-2 focus:outline-none rounded-xl focus:border-gray-600' placeholder='Enter Your Password' type="password" />
                    </div>
                    <div className='mt-3 flex items-center justify-between w-full'>
                        <div>
                            <input className=' mr-1' type="checkbox" name="" id="" />
                            <label className='md:text-base sm:text-xs mb-1' htmlFor="">Rememmerd Me</label>
                        </div>
                        
                    </div>
                    <div className='mt-3'>
                        <button className='px-16 w-full md:text-xl  font-bold rounded-xl bg-red-600 py-1 text-white text-center'>Sign up</button>
                        <Toaster />
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
                        <li className='text list-none text-center mt-3'>Already have an account <Link className='text-red-500' to='/login'>Login</Link></li>
                    </div>




                </form>
            </div>

        </div>
    );
};

export default SignUp;