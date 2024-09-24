import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="home-header">
            <div className='header-content'>
                <Link to="/" style={{ textDecoration: "none" }}><div className="logo">Kim's Page</div></Link>
            </div>

        </header>
    )
}

export default Header