import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import IndexPage from './components/IndexPage/IndexPage';
import ToolMasterdb from './components/ToolMasterdb/ToolMasterdb';
import ToolsHistory  from './components/ToolsHistory/ToolsHistory';
import Reports from './components/Reports/Reports';
import NavBar from './components/NavBar/NavBar';
import ToolsOnShopFloor from './components/ToolsOnShopFloor/ToolsOnShopFloor';
import AlertsTable from './components/AlertsTable/AlertsTable';
import Notification from './components/Notification/Notification';

import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));

  const getUserDetails = (userDetails) => {
    setUserName(userDetails.userName);
    setIsAdmin(userDetails.isAdmin);
  }
  
  //for showing alert notification
  const [showNotification, setShowNotification] = useState(false);
  const [numOfAlert, setNumOfAlerts] = useState(0);

  const getNotificationCount = async() => {
    const response = await fetch('https://ddp8ypl7va.execute-api.ap-south-1.amazonaws.com/DEV/Tms/GetNotifications',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:localStorage.getItem('userId')})
    });
    const json = response.json();
    if(json.ResponseCode === 0 && json.data.length > 0){
        setNumOfAlerts(json.data.count);
    };

    if(numOfAlert > 0){
      setShowNotification(true);
    }
};

setInterval(getNotificationCount, 5000);

  return (
    <BrowserRouter>
      <div className="container-fluid App">
      <Header></Header>
      <Route exact path='/'>
        <LoginForm getUserDetailsHandler={(userDetails) => getUserDetails(userDetails)}></LoginForm>
        <Footer></Footer>
      </Route>
      <Route path='/index'>
        <IndexPage admin={isAdmin} userName={userName}></IndexPage>
      </Route>
      <Route exact path='/tooldatabase'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <ToolMasterdb admin={true}></ToolMasterdb>
        {showNotification
        ? <Notification 
          showHandler={(value) => setShowNotification(value)}
          count={numOfAlert}></Notification>
        : null}
      </Route>
      <Route exact path='/toolshistory'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <ToolsHistory admin={true}></ToolsHistory>
        {showNotification
        ? <Notification 
          showHandler={(value) => setShowNotification(value)}
          count={numOfAlert}></Notification>
        : null}
      </Route>
      <Route exact path='/reports'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <Reports admin={true}></Reports>
        {showNotification
        ? <Notification 
          showHandler={(value) => setShowNotification(value)}
          count={numOfAlert}></Notification>
        : null}
      </Route>
      <Route exact path='/toolsonshopfloor'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <ToolsOnShopFloor></ToolsOnShopFloor>
        {showNotification
        ? <Notification 
          showHandler={(value) => setShowNotification(value)}
          count={numOfAlert}></Notification>
        : null}
      </Route>
      <Route exact path='/alerts'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <AlertsTable></AlertsTable>
        {showNotification
        ? <Notification 
          showHandler={(value) => setShowNotification(value)}
          count={numOfAlert}></Notification>
        : null}
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
