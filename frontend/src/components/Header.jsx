import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="home-header">
            <div className='header-content'>
                <div className="logo">Kim's Page</div>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/join">Sing Up</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header