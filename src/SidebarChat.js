import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import {Avatar} from '@material-ui/core';
import db from "./firebase";
import { useDispatch } from 'react-redux';
import { setChat } from './features/counter/chatSlice';
function SidebarChat({id,chatName})
{
    const [chatInfo,setChatInfo]=useState([]);
    useEffect(()=>{
        db.collection("chats").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot=>(
            setChatInfo(snapshot.docs.map(doc=>doc.data()))
        ));
    },[id]);
    const dispatch=useDispatch();
    return (
        <div onClick={()=>{
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName,
                })
            )
        }} className="sidebarChat">
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>

            </div>
        </div>
    )
}
export default SidebarChat;