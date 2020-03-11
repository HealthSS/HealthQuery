import React, { useState } from 'react';
import { Redirect } from 'react-router'

export default function AdminPage(props) {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <div id='AdminDiv'>
            <p>
                DATA DATA 
                DATA DATA 
                DATA DATA 
                DATA DATA 
                DATA DATA 
            </p>
        </div>
    )
}