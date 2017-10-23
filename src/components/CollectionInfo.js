import React from 'react'
import { Link } from 'react-router-dom'

const collectionStyle = {
     margin: 'auto',
     textAlign: 'center'
}

const list = {
	displey : 'flex',
	flexDirection : 'column',
	fontSize: 30
}

const item = {
	paddingBottom: 50
}

const CollectionInfo = () => (
	<div className="collectionTitle" style={collectionStyle}>
	<h2>Check out art works of famous artists  in RijksMuseum</h2>
	<h3>Choose an artist</h3>

	<ul style={list}>
        <li style={item} className="Gogh"><Link to='/collection/Gogh'>Vincent van Gogh</Link></li>
        <li style={item} className="Vermer"><Link to='/collection/Vermer'>Johannes Vermeer</Link></li>
        <li style={item} className="Rembrandt"><Link to='/collection/Rembrandt'>Rembranbt</Link></li>
      </ul>
    </div>
    )

export default CollectionInfo;