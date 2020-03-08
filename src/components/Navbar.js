import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar is-grey">
                <div className="navbar-brand">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1 className="navbar-item has-text-white">BREAKING <br />BAD</h1>
                    </Link>
                    <h1 className="navbar-item favorites">FAVORITES</h1>
                </div>
            </nav>
        </>
    )
}