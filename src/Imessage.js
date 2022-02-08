import React from 'react';
import "./Imessage.css";
import Sidebar from './Sidebar';
import Chat from "./Chat";
function Imessage(){
    return(
        <div className="imsg">
            {/* sidebar */}
            <Sidebar/>
            {/* chat */}
            <Chat/>
        </div>
    )
}
export default Imessage;