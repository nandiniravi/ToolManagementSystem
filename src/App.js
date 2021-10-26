import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import IndexPage from './components/IndexPage/IndexPage';
import ToolMasterdb from './components/ToolMasterdb/ToolMasterdb';
//import data from './components/constants';
import ToolsInShop  from './components/ToolsInShop/ToolsInShop';
import Reports from './components/Reports/Reports';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  return (
    <BrowserRouter>
    <div className="container-fluid App">
      <Header></Header>
      <Route exact path='/home'>
        <LoginForm></LoginForm>
        <Footer></Footer>
      </Route>
      <Route exact path='/index'>
        <NavBar isAdmin={true}></NavBar>
        <IndexPage admin={true}></IndexPage>
      </Route>
      <Route exact path='/tooldatabase'>
        <NavBar isAdmin={true}></NavBar>
        <ToolMasterdb admin={true}></ToolMasterdb>
      </Route>
      <Route exact path='/toolsinshop'>
        <NavBar isAdmin={true}></NavBar>
        <ToolsInShop admin={true}></ToolsInShop>
      </Route>
      <Route exact path='/reports'>
        <NavBar isAdmin={true}></NavBar>
        <Reports admin={true}></Reports>
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
