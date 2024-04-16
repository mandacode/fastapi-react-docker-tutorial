import React, { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8000/api/users/')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log('Error fetching users data:', error))
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map( user => ( <li key={user.id}>{user.id}. {user.email} </li>))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div>
            <UsersList />
        </div>
    )
};

export default App;