import React from 'react';
import {Redirect} from 'react-router-dom';
import './LoginForm.scss';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const LoginForm = (props) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userAuthenticated, setUserAuthenticated] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [userNameFromRes, setUserNameFromRes] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [sendRequest, setSendRequest] = useState(false);    

    useEffect(() => {
        async function fetchData(){
        if(sendRequest){
            const data = {
                userID: userId,
                password: password
            };
        
            const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/Login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            const resObj = await response.json();
            console.log(resObj.data);

            if(resObj.ResponseCode === 0){
                setUserAuthenticated(true);
                setUserNameFromRes(resObj.data['name']);
                setIsAdmin(resObj.data['isadmin']);
                localStorage.setItem("userId", userId);
                localStorage.setItem("isAdmin", resObj.data['isadmin']);
                localStorage.setItem("userName", resObj.data['name']);
                props.getUserDetailsHandler({
                    userName: resObj.data['name'],
                    isAdmin: resObj.data['isadmin']
                });
            }
            else{
                setUserAuthenticated(false);
                setShowErrorMsg(true);
            }
                
            setShowLoader(false);
            // setUserId('');
            // setPassword('');
            setSendRequest(false);
            }
        }
        fetchData();
        }, [sendRequest, userId, password]);

    const submitForm = async (event) => {
        event.preventDefault();
        setShowLoader(true);
        localStorage.clear();
        setSendRequest(true);       
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
                {showErrorMsg ? <ErrorMessage message="Invalid credentials. Please try again"></ErrorMessage> : null}
            </div>
        </div>
    );
}

export default LoginForm;