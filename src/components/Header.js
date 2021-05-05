import React from 'react'
import Search from './Search'
import "../styles/Header.css" 

//Icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';



const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">

            <div className="header__icon
            header__icon--active">
                <HomeIcon />
                <p>Home</p>
            </div>

            <div className="header__icon">
                <PersonOutlineIcon />
                <p>Account</p>
            </div>

            <div className="header__icon">
                <SearchIcon /> 
                <p>Search</p>
                </div>
                <Search />
            </div>
            <img src="https://bit.ly/3aSCMXJ" alt=""/>
        </div>
    )
}

export default Header
