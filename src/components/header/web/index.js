import React from 'react'
import './web.css'

function Web() {
    return <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                <i class= 'option-icon'></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <i class= 'option-icon'></i>Skills

                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                <i class= 'option-icon'></i>Work

                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class= 'option-icon'></i>Contact

                </a>
            </div>
        </div>
    
}

export default Web
