import React from 'react'
import './mobile.css'
//import {ImCross} from 'react-icons/im'
import {FaLaptopCode} from 'react-icons/fa'
import {MdOutlineContactPhone} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlinePencilAlt} from 'react-icons/hi'


function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <i className= 'fi-rr-cross-circle'></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#project'>
                <i class= 'option-icon'></i><HiOutlinePencilAlt />Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skills'>
                <i class= 'option-icon'></i><FaLaptopCode />Skills

                </a>
            </div>
            <div className='mobile-option'>
                <a href='#work'>
                <i class= 'option-icon'></i><MdWorkOutline />Work

                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact'>
                <i class= 'option-icon'></i><MdOutlineContactPhone />Contact

                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
