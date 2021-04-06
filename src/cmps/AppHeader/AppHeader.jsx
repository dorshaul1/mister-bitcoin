import './AppHeader.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/bitcoin.svg'
export const AppHeader = (props) => {
    return (
        <div className="app-header flex space-between align-center">
            <div className="logo flex  space-between align-center">
            <img src={logoImage}/>
            <h1>Mister Bitcoin</h1>
            </div>
            <ul className="flex clean-list">
                <NavLink exact activeClassName="active" to='/'> <li>Home</li></NavLink>
                <NavLink exact activeClassName="active" to='/contact'><li>Contact</li></NavLink>
                {/* <NavLink to='/'><StyledTab label="Statistic" /></NavLink> */}
            </ul>
        </div>
    );
}
