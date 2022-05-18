import React from 'react'
import './web.css'
import {FaLaptopCode} from 'react-icons/fa'
import {MdOutlineContactPhone} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlinePencilAlt} from 'react-icons/hi'

function Web() {
    return <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                <i class= 'option-icon'></i><HiOutlinePencilAlt />Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'>
                <i class= 'option-icon'></i><FaLaptopCode />Skills

                </a>
            </div>
            <div className='web-option'>
                <a href='#work'>
                <i class= 'option-icon'></i><MdWorkOutline />Work

                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class= 'option-icon'></i><MdOutlineContactPhone />Contact

                </a>
            </div>
        </div>
    
}

export default Web
