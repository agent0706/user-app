import {useState} from 'react';

const AdminComponent = () => {

    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [showIncorrectUserDetailsMessage, updateShowIncorrectDetailsMessage] = useState(false);

    const handleAddUser = () => {
        if (username !== '' && password !== '') {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = [...existingUsers, {username: username, password: password}];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            updateShowIncorrectDetailsMessage(false);
        } else {
            updateShowIncorrectDetailsMessage(true);
        }
    };

    return (
        <div>
            <h1 style={{alignContent: 'center'}}>Add user</h1>
            {showIncorrectUserDetailsMessage && <p style={{color: 'red'}}>Please enter proper user details</p>}
            <input
                placeholder={'Add Username'}
                name={'addUsername'}
                onChange={(event) => updateUsername(event.target.value)}
                value={username}
                style={{
                    display: 'block',
                    'padding-bottom': '10px',
                    'margin-bottom': '10px'
                }}
            />
            <input
                placeholder={'Add Password'}
                name={'addPassword'}
                onChange={(event) => updatePassword(event.target.value)}
                value={password}
                style={{
                    display: 'block',
                    'padding-bottom': '10px',
                    'margin-bottom': '10px'
                }}
            />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default AdminComponent;