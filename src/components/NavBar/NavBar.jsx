import { NavLink } from "react-router-dom";
import './NavBar.scss';

const adminOptions = [
    {title: 'Tools Masterlist', link: '/tooldatabase'}, 
    {title: 'Tools In Shop', link: '/toolsinshop'}, 
    {title: 'Reports', link: '/reports'},
    {title: 'Logout', link: '/home'}
];
const mechanicOptions = [
    {title: 'Tool Life Monitor', link: '/toolsonshopfloor'}, 
    {title: 'Alert', link: '/alerts'}, 
    {title: 'Logout', link: '/home'}
];

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
                return <NavLink to={each.link} key={each.title} onClick={(event) => logout(event)}>
                    {each.title}
                </NavLink>}
                else{
                    return <NavLink to={each.link} key={each.title}>
                    {each.title}
                </NavLink>}
                })
            : mechanicOptions.map(each => {
                if(each.title === 'Logout'){
                    return <NavLink to={each.link} key={each.title} onClick={(event) => logout(event)}>
                        {each.title}
                    </NavLink>}
                else{
                    return <NavLink to={each.link} key={each.title}>
                    {each.title}
                </NavLink>}
            })
            }
        </div>
    );
};

export default NavBar;