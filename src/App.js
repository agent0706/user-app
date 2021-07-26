import {Switch, Route, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import LoginComponent from './components/Login/LoginComponent';
import AdminComponent from './components/User/AdminComponent';
import UserComponent from './components/User/UserComponent';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [currentUserData, updateCurrentUserData] = useState(null);
  const history = useHistory();

  const isAdminUser = (userData) => {
    const {username = ''} = userData;
    return username === 'admin';
  };
  
  const handleUserLoginSuccess = (userData) => {
    updateCurrentUserData(userData);
    props.addCurrentUser(userData);
    if (isAdminUser(userData)) {
      history.push('/admin');
    } else {
      history.push('/user');
    }
  };

  const handleUserLoggedOut = () => {
    updateCurrentUserData(null);
  };

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('users'));
    const adminUserData = {
      username: 'admin',
      password: 'admin',
      name: 'Admin'
    };
    if (!usersData?.length) {
      localStorage.setItem('users', JSON.stringify([adminUserData]));
    }
  }, []);

  if (!currentUserData) {
    return <LoginComponent handleUserLoginSuccess={handleUserLoginSuccess} />;
  }

  return (
      <Switch>
        <Route path={'/admin'}>
            <AdminComponent />
        </Route>
        <Route path={'/user'}>
            <UserComponent />
        </Route>
      </Switch>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCurrentUser: (currentUserData) => {
      dispatch({type: 'ADD_CURRENT_USER', payload: {username: currentUserData.username}});
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
