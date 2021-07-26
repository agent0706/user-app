import {useState} from 'react';

const LoginComponent = ({
    handleUserLoginSuccess
}) => {

    const [userName, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [isInCorrectLogin, updateIsIncorrectLogin] = useState(false);

    const loginHandler = () => {
        const existingUsers = JSON.parse(localStorage.getItem('users'));
        if (existingUsers?.find((user) => user.username === userName && user.password === password)) {
            updateIsIncorrectLogin(false);
            handleUserLoginSuccess({username: userName});
        } else {
            updateIsIncorrectLogin(true);
            updateUsername('');
            updatePassword('');
        }
    };

    return (
        <div>
            {isInCorrectLogin && <p style={{color: 'red'}}>Incorrect user details</p>}
            <input
                placeholder={'username'}
                onChange={(event) => updateUsername(event.target.value)}
                value={userName}
                style={{
                    display: 'block',
                    'padding-bottom': '10px',
                    'margin-bottom': '10px'
                }}
            />
            <input
                placeholder={'password'}
                onChange={(event) => updatePassword(event.target.value)}
                value={password}
                type={'password'}
                style={{
                    display: 'block',
                    'padding-bottom': '10px',
                    'margin-bottom': '10px'
                }}
            />
            <button onClick={loginHandler}>Login</button>
        </div>
    );
};

export default LoginComponent;
