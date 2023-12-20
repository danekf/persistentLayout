import React, { useState } from "react";
import './LoginPage.css';
import login from "../../Helpers/login";


const LoginPage: React.FC<{}> = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  })

  const textHandler = (event:any) =>{
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  //TODO - add handler for already logged in, redirect

  //TODO add buttons for different auth types and change default 
  return (
    <>
      <div className="loginDetails">
        <label>Username: 
          <input type="text" name="username" value={state.username} onChange={(event)=>textHandler(event)}/>
        </label>
        <label>Password: 
          <input type="password" name="password" value={state.password} onChange={(event)=>textHandler(event)} />
        </label>
        <button onClick={()=>login('local', state)}>Login with local account</button>
        </div>
    </>
  )
}

export default LoginPage