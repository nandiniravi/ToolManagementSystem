import {useState} from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.scss';
import data from '../constants';

const adminOptions = data.indexPages['admin'];
const mechanicOptions = data.indexPages['user'];

const NavBar = (props) => {

    const logout = (event) => {
        localStorage.clear();
    }
    console.log(typeof(props.isAdmin));

    return (
        <div className='nav-bar'>
            {(String(props.isAdmin) === 'true')
            ? adminOptions.map(each => {
                if(each.title === 'Logout'){
                return <NavLink to={each.link} exact key={each.displayText} onClick={(event) => logout(event)}>
                    {each.displayText}
                </NavLink>}
                else{
                    return <NavLink to={each.link} exact key={each.displayText}>
                    {each.displayText}
                </NavLink>}
                })
            : mechanicOptions.map(each => {
                if(each.displayText === 'Logout'){
                    return <NavLink to={each.link} exact key={each.displayText} onClick={(event) => logout(event)}>
                        {each.displayText}
                    </NavLink>}
                else{
                    return <NavLink to={each.link} exact key={each.displayText}>
                    {each.displayText}
                </NavLink>}
            })
            }
        </div>
    );
};

export default NavBar;