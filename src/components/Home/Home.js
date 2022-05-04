import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // Delete item 
    const handleDeleteUser = _id => {
        const confirmation = window.confirm("Are you sure to delete?")
        if (confirmation) {

            console.log("Deleteing", _id);
        }
    }
    return (
        <div>
            <h2>Show All Users</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>Name: {user.name} : Email: {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div >
    );
};

export default Home;