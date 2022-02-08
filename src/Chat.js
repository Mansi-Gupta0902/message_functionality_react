import React, { useEffect, useState } from 'react';
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import "./Chat.css";
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from './features/counter/chatSlice';
import db from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/counter/userSlice';
function Chat() {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([]);
    const chatId = useSelector(selectChatId);
    const chatName = useSelector(selectChatName);
    const user=useSelector(selectUser);

    useEffect(() => {
        if(chatId)
        {
            db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>(
            setMessages(
                snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))));
        }
        
    }, [chatId])
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`##### props.id: ${chatId}`)
        
        if(chatId!=null)
        {
            db.collection('chats').doc(chatId).collection('messages').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid:user.uid,
                photo: user.photo,
                displayName: user.displayName,
                email:user.email,
                message:input,
            })
        }

        
        
        setInput("");
    };
    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat_messages">
                {messages.map(({id,data})=>(
                    <Message key={id} contents={data}/>
                ))}
            </div>

            {/* chat input */}
            <div className="chat_input">
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type here" type="text" />
                    <button onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat_mic" />
                </IconButton>

            </div>


        </div>
    )
}
export default Chat;