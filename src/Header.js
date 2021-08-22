import { Home, SupervisorAccount } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount}title="My Network"/>
            </div>
        </div>
    )
}

export default Header
