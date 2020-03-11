import React, { useState } from 'react';
import { Redirect } from 'react-router'

export default function Login(props) {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <div id='loginDiv'>
            <h2>Log In</h2>
            <input id="logInput" type="text" placeholder="username" required/>
            <input id="logInput" type="text" placeholder="password" required/>
            <button id="logButton" type="submit"> Log In </button>
            <button id="signButton" type="submit"> Sign Up </button>
        <div id="oAuthButton">
            <hr/>
            <button id="gButton"> Google+ </button>
            <button id="fbButton"> Facebook </button>
        </div>
        </div>
    )
}