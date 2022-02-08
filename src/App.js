import React,{useEffect} from 'react';
import Imessage from './Imessage';
import Login from "./Login";
import { useDispatch, useSelector} from 'react-redux';
import {auth} from "./firebase";
import {selectUser,login,logout} from './features/counter/userSlice'
import './App.css';

function App() {
  const user=useSelector(selectUser);

  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser)
      {
        //logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName,
        }));
      }
      else
      {
        //logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      
    {user? (
      <Imessage/>
    ):(
      <Login/>
    
    )}
      
    </div>
  );
}

export default App;
