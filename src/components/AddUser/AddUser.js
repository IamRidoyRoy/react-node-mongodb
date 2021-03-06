import React from 'react';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        // Send data to server 
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
            })
    }
    return (
        <div>
            <h2>Please add some user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' id="" required /> <br />
                <input type="text" name="email" placeholder='Email' id="" required /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;