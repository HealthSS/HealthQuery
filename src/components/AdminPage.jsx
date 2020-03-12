import React, { useState } from 'react';
import { Redirect } from 'react-router'

export default function AdminPage(props) {
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <div id='AdminDiv'>
            <p>
                Pending cases to be reviewed and verified or rejected by accounts with Admin privileges will be listed here
            </p>
        </div>
    )
}