import React from 'react'
import { Link } from 'react-router-dom';

const headerStyle = {
	background: 'linear-gradient(45deg, #FFDD07  , #FF7B07   )',
	paddingTop: 30,
	height: 120
}

const headerLink = {
	color : '#68BF21',
	fontWeight : 600,
	fontSize: 20
}

const Header = () => (
	<div style={headerStyle}>
	 <h1 style={{"marginLeft": "37px"}} >RijksMuseum</h1>
	<header>
	<nav>
	<ul>
	    <li ><Link to='/' style={headerLink}>Home</Link></li>
        <li style={headerLink}><Link to='/collection' style={headerLink}>Collection</Link></li>
      </ul>
    </nav>
  </header>
  </div>
	)

export default Header;