import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import { db } from './firebase'
import InputOption from './InputOption'
import Post from './Post'
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )));
        });
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Sponge Bob',
            description: 'Test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("");
    } 

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)}type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
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
            {posts.map (({id, data: {name, description, message, photoUrl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
