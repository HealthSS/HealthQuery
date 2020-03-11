import React, { useState } from 'react';
import { Redirect } from 'react-router'

export default function Login(props) {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <div id='loginDiv'>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button type="submit"> Log In </button>
            <button type="submit"> Sign Up </button>
            <button> Google Login In </button>
        </div>
    )
}