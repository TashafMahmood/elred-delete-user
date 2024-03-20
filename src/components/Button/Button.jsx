import React from 'react'
import './button.scss'

const Button = ({ onClickFunction }) => {
    return (
        <div className='btn_div'>
            <button className='btn button_main' onClick={onClickFunction} >
                Get OTP
            </button>
        </div>
    )
}

export default Button
