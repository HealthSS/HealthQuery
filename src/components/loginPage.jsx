import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { updateLogin, userUpdate, passwordUpdate } from "../actionTypes/action.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

export default function Login(props) {

    const dispatch = useDispatch();
    const {user , password} = useSelector(state=> {return {
        user: state.text.username_txt,
        password: state.text.password_txt
    }}, shallowEqual)

    const loginCall = () => {
        console.log('frontend')
        fetch("http://localhost:3000/login", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
                password
            })
          })
          .then(res => res.json())
          .then(data => 
            {console.log('this', typeof data)
            console.log('this', data)
                dispatch(updateLogin(data))})
    }

    function reRoute() {
        fetch('/auth/google', {
            method: 'GET'
        })
        .then(response => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div id='loginDiv'>
            <h2>Log In</h2>
            <input id="userInput" onChange={(e) => dispatch(userUpdate(e.target.value))} type="text" placeholder="username" required/>
            <input id="passInput" onChange={(e) => dispatch(passwordUpdate(e.target.value))} type="text" placeholder="password" required/>
            <button id="logButton" onClick={() =>loginCall()} type="submit"> Log In </button>
        <div id="oAuthButton">
            <hr/>
            {/* <button id="gButton" onClick={reRoute}> Google+ </button> */}
            <a id="gButton" href="localhost:3000/auth/google">Google+</a>
            <button id="fbButton"> Facebook </button>
        </div>
        </div>
    )
}