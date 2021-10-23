import React from 'react';
import {Redirect} from 'react-router-dom';
import './LoginForm.scss';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const LoginForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userAuthenticated, setUserAuthenticated] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setShowLoader(true);
        console.log(userId);
        console.log(password);
        setShowLoader(false);
        setUserAuthenticated(true);
        setUserId('');
        setPassword('');
    }

    return (
        userAuthenticated 
        ? <Redirect to='/index'/>
        : <div className='login-form'>
            <p>Enter your credentials to login to Tool Management System</p>
            {showLoader ? <Loader></Loader> : null}
            <div >
                <form>
                    <input type='text' 
                    placeholder='User ID'
                    maxLength = '6' 
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}/><br/><br/>
                    <input type='password' 
                    placeholder='Password' 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/><br/><br/><br/>
                    <button onClick={(event) => submitForm(event)}>Login</button>
                </form>
                {userAuthenticated === false ? <ErrorMessage></ErrorMessage> : null}
            </div>
        </div>
    );
}

export default LoginForm;