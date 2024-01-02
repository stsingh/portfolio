import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
        <header className='fixed z-10 bg-black top-0 left-0 w-full py-3 px-0 text-left leading-6 shadow'>
            <nav className='text-flame px-3 sm:px-4'>
                <div className='container mx-auto flex flex-wrap items-center justify-between'>
                    <Link to="/" className="text-3xl font-bold">
                        S<sup>2</sup>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="text-white hover:text-flame inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer md:hidden block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    
                    <div className='hidden w-full md:block md:w-auto' id="navbar-default">
                        <ul className="text-white flex">
                            <li className='mr-4 flex hover:text-flame'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
                                </svg>
                                <Link to="/projects">&nbsp;Projects</Link>
                            </li>
                            <li className='hover:text-flame flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                </svg>
                                <Link to="/experience">&nbsp;Experience</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;