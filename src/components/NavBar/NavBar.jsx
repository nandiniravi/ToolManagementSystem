import { NavLink } from "react-router-dom";
import './NavBar.scss';
import data from '../constants';

const adminOptions = data.indexPages['admin'];
const mechanicOptions = data.indexPages['user'];


// const adminOptions = [
//     {title: 'Tools Masterlist', link: '/tooldatabase'}, 
//     {title: 'Tools History', link: '/toolshistory'}, 
//     {title: 'Reports', link: '/reports'},
//     {title: 'Logout', link: '/home'}
// ];
// const mechanicOptions = [
//     {title: 'Tool Life Monitor', link: '/toolsonshopfloor'}, 
//     {title: 'Alert', link: '/alerts'}, 
//     {title: 'Logout', link: '/home'}
// ];

// ['Tool Life Monitor', 'Alert', 'Logout'];

const NavBar = (props) => {

    const logout = (event) => {
        localStorage.clear();
    }

    return (
        <div className='nav-bar'>
            {props.isAdmin 
            ? adminOptions.map(each => {
                if(each.title === 'Logout'){
                return <NavLink to={each.link} key={each.displayText} onClick={(event) => logout(event)}>
                    {each.displayText}
                </NavLink>}
                else{
                    return <NavLink to={each.link} key={each.displayText}>
                    {each.displayText}
                </NavLink>}
                })
            : mechanicOptions.map(each => {
                if(each.displayText === 'Logout'){
                    return <NavLink to={each.link} key={each.displayText} onClick={(event) => logout(event)}>
                        {each.displayText}
                    </NavLink>}
                else{
                    return <NavLink to={each.link} key={each.displayText}>
                    {each.displayText}
                </NavLink>}
            })
            }
        </div>
    );
};

export default NavBar;