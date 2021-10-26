import { NavLink } from "react-router-dom";
import './NavBar.scss';

const adminOptions = [
    {title: 'Tools Masterlist', link: '/tooldatabase'}, 
    {title: 'Tools In Shop', link: '/toolsinshop'}, 
    {title: 'Reports', link: '/reports'}
];
const mechanicOptions = ['Tool Life Monitor', 'Tool Request'];

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            {props.isAdmin 
            ? adminOptions.map(each => {
                return <NavLink to={each.link} key={each.title}>
                    {each.title}
                </NavLink>
            })
            : mechanicOptions.map(each => {
                return <NavLink to={each.link} activeClassName='selected' key={each.title}>
                    {each.title}
                </NavLink>
            })
            }
        </div>
    );
};

export default NavBar;