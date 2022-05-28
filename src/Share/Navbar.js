import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';

const Navbar = ({ children }) => {
    const { user, handleSignOut } = useFirebase()
    const photo = user?.photoURL
    return (<div >



        <div class="drawer drawer-end">

            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col mb-36">

                <div class="w-full navbar bg-[#7efff5] mb-1 ">


                    <div class="flex-1 ">
                        <ul class="menu menu-horizontal">

                            <li><a>
                                {
                                    user?.uid
                                        ?
                                        <div className='dropdown'>
                                            <button className='btn btn-secondary' onClick={handleSignOut}>Log out
                                                <i className='fa fa-caret-down'></i>
                                            </button>
                                            <div class="avatar">
                                                <div class="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-4">
                                                    <img src={photo} alt='avater' />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <Link className='navText' to='/login'> Login</Link>
                                }
                            </a></li>
                            <li className='font-semibold'><Link to='/'>Home</Link></li>
                            <li className='font-semibold'><Link to='myPortfolio'>My Portfolio</Link></li>
                            <li className='font-semibold'><Link to='blog'>Blog</Link></li>

                        </ul>
                    </div>
                    <div class="flex-none px-2 mx-2 text-xl font-bold">Tools Plus</div>

                    <div class="flex-none">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {children}
            </div>


            <div class="drawer-side mt-16 ">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto lg:w-80 w-26 bg-base-100">
                    {
                        user?.uid
                            ?
                            <div className='dropdown'>

                                <li className='text-center font-bold'>Dashboard</li>
                                <Link to='/' className='font-semibold ml-4'><a>Home</a></Link>

                                <li className='font-semibold'><a>My Orders</a></li>

                                <li>
                                    <Link to='myBooking' className='font-semibold ml-4'><a>^Add A Review</a></Link>
                                </li>

                                <Link to='myBooking' className='font-semibold ml-4'><a>Add A Review</a></Link>

                                <li className='font-semibold'><a>My Profile</a></li>





                            </div>
                            :
                            <div className='text-center font-semibold'>
                                <li>Please log in First</li>

                            </div>
                    }



                </ul>

            </div>

        </div>









    </div>
    );
};

export default Navbar;