import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItem = <> {
        user?.uid ?
            <>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/my-reviews'>My Reviews</Link></li>
                <li><Link to='/add-services'>Add Service</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </>
            :
            <>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </>


    }
    </>
    const privetRouteNaveItems = <>

    </>
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                        {user?.uid ?
                            <>
                                <h3 className=" mr-3">{user.displayName}</h3>
                                <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn btn-outline btn-warning mr-4">Sign In</button>
                                </Link>

                                <Link to='/registration'>
                                    <button className="btn  hover:btn-outline btn-warning">Sign Up</button>
                                </Link>
                            </>

                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">PhotoGrapher Shohanur</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden sm:block">
                    {user?.uid ?
                        <>
                            <div className="flex items-center">
                                <h3 className=" mr-3">
                                    {
                                        user?.displayName
                                    }
                                </h3>
                                <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn btn-outline btn-warning mr-4">Sign In</button>
                            </Link>

                            <Link to='/registration'>
                                <button className="btn  hover:btn-outline btn-warning">Sign Up</button>
                            </Link>
                        </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;