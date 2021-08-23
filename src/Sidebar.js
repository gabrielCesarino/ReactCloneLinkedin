import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""></img>
                <Avatar className="sidebar__avatar"/>
                <h2>Sponge Bob</h2>
                <h4>sponge.bob@squarepanties.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2,342</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,342</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                
            </div>
        </div>
    )
}

export default Sidebar
