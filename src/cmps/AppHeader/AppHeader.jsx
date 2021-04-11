import './AppHeader.scss'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/bitcoin.svg'
export const AppHeader = () => {
    return (
        <div className="app-header flex space-between align-center">
            <Link to="/"> <div className="logo flex  space-between align-center">
                <img src={logoImage} alt="picture" />
                <h1>Mister Bitcoin</h1>
            </div></Link>
            <ul className="flex clean-list">
                <NavLink exact activeClassName="active" to='/'> <li>Home</li></NavLink>
                <NavLink exact activeClassName="active" to='/contact'><li>Contact</li></NavLink>
                {/* <NavLink to='/'><StyledTab label="Statistic" /></NavLink> */}
            </ul>
        </div>
    );
}
