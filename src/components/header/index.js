import React from 'react'
import './header.css'
import Mobile from './mobile'
//import Mobile from './mobile'
import Web from './web'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>Prabin</div>
            <div className='menu'>
            <div className='web-menu'>
                <Web />
            </div>
            <div className='mobile-menu'>
                <div>

                    <i class="fi fi-rr-Apps"></i>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header
