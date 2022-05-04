import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // Delete item 
    const handleDeleteUser = id => {
        const confirmation = window.confirm("Are you sure to delete?");
        if (confirmation) {
            console.log("Deleteing", id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        console.log("Deleted");
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining);
                })
        }
    }
    return (
        <div>
            <h2>Show All Users</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>Name: {user.name} : Email: {user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div >
    );
};

export default Home;