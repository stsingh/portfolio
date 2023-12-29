import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
        <nav>
            <div className="links">
                <Link to="/" className="absolute left-6 top-3 flex text-3xl">
                    Sat Sri Akal
                </Link>
                <ul className="flex absolute right-6 top-3">
                    <li className='mr-4'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;