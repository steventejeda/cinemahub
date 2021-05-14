import React from 'react'
import "../styles/Header.css" 


//Icons
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Search from '@material-ui/icons/Search';



const Header = () => {
    return (
        <div className="header">
            <div className="header__icons">

            <div className="header__icon
            header__icon--active">
                
                <Link href="/"><HomeIcon /></Link>
                <p>Home</p>
            </div>

            <div className="header__icon">
                <Link href="/register"><PersonOutlineIcon /></Link>
                <p>Account</p>
            </div>

            <div className="header__icon">
                <Link href="/search"><Search /></Link>
                <p>Search</p>
            </div>
            </div>
            <img src="https://bit.ly/3aSCMXJ" alt=""/>
        </div>
    )
}

export default Header
