import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logo.png"
const Header = () => {
    const handleSignout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={"/"}>
                        {/* <img width="170"  className='h-25' src={logo} alt="" /> */}


                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900"><Link to="/about">About</Link> </a>
                        <a className="mr-5 hover:text-gray-900"> <Link to="/contact">Contact Us</Link> </a>
                        <a className="mr-5 hover:text-gray-900"><Link to="/shop">Shop</Link> </a>
                        <a className="mr-5 hover:text-gray-900"><Link to="/addproduct">Add products</Link> </a>

                    </nav>
                    {user ?
                        <Link onClick={handleSignout}>
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/login"}>Signout</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                        :
                        <Link to="login">
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/login"}>Login</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    }
<label htmlFor="my-drawer-4" className="drawer-button btn btn-primary" >cart</label>
                    {/* <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">

                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div> */}


                </div>
            </header>
        </div>
    );
};

export default Header;