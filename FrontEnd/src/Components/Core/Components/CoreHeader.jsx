import React, { useContext } from 'react'
import './CSS/Header.css';
import { Link } from 'react-router';
import { AuthContext } from '../../../Context/authContext';


export default function CoreHeader() {
    const { userLoginedIn } = useContext(AuthContext);
    return (
        <div className="headerContainer">
            <div className="row h-100">
                <div className="mainTitleContaier col-lg-3">
                    <h1 className='mainTitle'>Shop Now</h1>
                </div>

                <div className="linksContainer col-lg-6">
                    <Link to='/' className='links'><span className='linkText'>Home</span></Link>
                    <Link to='/electronics' className='links' style={{ width: '125%' }}><span className='linkText'>Electronics</span></Link>
                    <Link to='/' className='links'><span className='linkText'>Fashion</span></Link>
                    <Link to='/' className='links'><span className='linkText'>Furniture</span></Link>
                    {
                        userLoginedIn? <Link to='/userDashBoard/Profile' className='links'><span className='linkText'>Account</span></Link>: <Link to='/Login' className='links'><span className='linkText'>Log In</span></Link>
                    }
                </div>

                <div className="searchContainer col-lg-3">
                    <h2 className="search">Search</h2>
                    <input type="text" className='searchBox' />
                </div>
            </div>
        </div>
    );
};


{/* <Link to='/' className='links'><span className='linkText'>Log In</span></Link> */}