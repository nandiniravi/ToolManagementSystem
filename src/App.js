import {BrowserRouter, Route} from 'react-router-dom';
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

import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));

  const getUserDetails = (userDetails) => {
    setUserName(userDetails.userName);
    setIsAdmin(userDetails.isAdmin);
  }

  console.log('isAdmin: ',isAdmin);
  console.log('isAdmin: ',typeof(isAdmin));

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
      </Route>
      <Route exact path='/toolshistory'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <ToolsHistory admin={true}></ToolsHistory>
      </Route>
      <Route exact path='/reports'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <Reports admin={true}></Reports>
      </Route>
      <Route exact path='/toolsonshopfloor'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <ToolsOnShopFloor></ToolsOnShopFloor>
      </Route>
      <Route exact path='/alerts'>
        <NavBar isAdmin={isAdmin}></NavBar>
        <AlertsTable></AlertsTable>
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
