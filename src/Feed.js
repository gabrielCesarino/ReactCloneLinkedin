import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React from 'react'
import './Feed.css'
import InputOption from './InputOption'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={Image} color="#7085f9" />
                    <InputOption title='Video' Icon={Subscriptions} color="#E7A33E" />
                    <InputOption title='Event' Icon={EventNote} color="#C0CBCD" />
                    <InputOption title='Write Article' Icon={CalendarViewDay} color="#7FC15E" />
                </div>
            </div>
        </div>
    )
}

export default Feed
