import React from 'react';
import {Button} from "@material-ui/core";
import {auth,provider} from "./firebase";
import "./Login.css";
function Login(){
    const signIn=()=>{
        auth.signInWithPopup(provider).catch(error=>alert(error.message));
    };
    return (
        <div className="login">
            <h2>imessage</h2>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}
export default Login;