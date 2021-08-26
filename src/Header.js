import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons'
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
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption avatar="https://i.pinimg.com/736x/02/5c/86/025c86e60f2b348153d6beb4696378ce.jpg" title="Sponge Bob"
                />
            </div>
        </div>
    )
}

export default Header
