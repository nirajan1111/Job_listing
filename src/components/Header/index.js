import React from 'react'
import './style.css'
import Rounded_Rectangle from './Roundedbox/roundedbox'
const Header = () => {

    return (
        <div className='header'>
            <Rounded_Rectangle top="-285px" left="86px" />
            <Rounded_Rectangle top="-870px" left="480px" />
            <Rounded_Rectangle top="-1100px" left="880px" />
            <Rounded_Rectangle top="-1600px" left="1250px" />
        </div>
    )
}

export default Header
