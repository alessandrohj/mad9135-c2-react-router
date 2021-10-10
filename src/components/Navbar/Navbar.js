import {NavLink} from 'react-router-dom';
import './navbar.css';

export default function Navbar(props){
    return (
        <div className='navbar'>
         <NavLink to='/' exact>Home</NavLink>
         <NavLink to='/users'>Users</NavLink>
         <NavLink to='/address'>Addresses</NavLink>
        </div>
    )
}