import React, { useState } from 'react';

export default function AdminPage(props) {


    return (
        <div id='AdminDiv'>
            <input type="text" onChange={(e) => dispatch(addCase(e.target.value))} placeholder="Location"/>
                <button type="submit"> Approve </button>
                <input type="text" onChange={(e) => dispatch(removeCase(e.target.value))} placeholder="Location"/>
                <button type="submit"> Reject </button>
         </div>
    )
}