import React from 'react'
import Button from '../../components/Button/Button'
import './mainpage.scss'
import TitleText from '../../components/TitleText/TitleText'

const MainPage = ({ setPage }) => {
    const handleClick = () => { setPage(true) }
    return (
        <div className='main_page'>
            <div className="main_page_content">
                <TitleText title={'Delete account'} />
                <div className="main_page_desc">
                    Are you sure you want to delete your account?
                </div>
            </div>
            <Button onClickFunction={handleClick} title={'Get OTP'} />
        </div>
    )
}

export default MainPage
