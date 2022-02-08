import React from "react";
import "./Message.css";
import {Avatar} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
function Message({id,contents:{timestamp, displayName, photo, email, message, uid}})
{
    const user=useSelector(selectUser);
    return(
        <div className={`message ${user.email===email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            
        </div>
    )
}
export default Message;