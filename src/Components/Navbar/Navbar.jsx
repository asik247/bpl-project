import React from 'react';
import '/src/index.css'
import logo from '/src/assets/logo.png'
import banner from '/src/assets/banner-main.png'
// import bannerBg from '/src/assets/banner-shadow.png'
// import bannerBg from '/src/assets/banner-shadow.png'
// import logo from '/src/assets/logo.png'


const Navbar = () => {
    return (
        <div>
            <div className="navbar fixWids">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="text-xl"><img src={logo} alt="logo" width={70} /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray ">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <a className="btn rounded-xl"><span>0</span> Coin <img src="/src/assets/coin.png" alt="" /></a>
                </div>
                {/* <div className="navbar-end">
                   
                </div> */}
            </div>

            {/* Banner code here now */}
            {/* Banner code here now */}
            <div
                className="flex flex-col items-center text-center space-y-6 py-16 bg-cover bg-center"
                style={{ backgroundImage: "url('/banner-shadow.png')" }}
            >

                <img src={banner} alt="banner" className="w-80" />

                <div>
                    <h1 className="text-3xl font-bold">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className="text-gray mt-2">
                        Beyond Boundaries Beyond Limits
                    </p>
                </div>

                <button className="btn rounded-xl">
                    Claim Free Credit
                </button>

            </div>

        </div>




    );
};

export default Navbar;