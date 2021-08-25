import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'

function Feed() {

    const [posts, setPosts] = useState([])
    const sendPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost}type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={Image} color="#7085f9" />
                    <InputOption title='Video' Icon={Subscriptions} color="#E7A33E" />
                    <InputOption title='Event' Icon={EventNote} color="#C0CBCD" />
                    <InputOption title='Write Article' Icon={CalendarViewDay} color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {posts.map ((post) => (
                <Post />
            ))}
            <Post name='Sponge Bob' description='Test' message='This a test' />
        </div>
    )
}

export default Feed
