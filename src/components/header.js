import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
	<nav>
	<ul>
	    <li ><Link to='/'>Home</Link></li>
        <li className="Vincent"><Link to='/Vincent'>Vincent</Link></li>
        <li className="Vermer"><Link to='/Vermer'>Vermer</Link></li>
        <li className="Rembrandt"><Link to='/Rembrandt'>Rembranbt</Link></li>
      </ul>
    </nav>
  </header>
	)

export default Header;