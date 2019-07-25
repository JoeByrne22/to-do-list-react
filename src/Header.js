import React from 'react'
import { Link } from  'react-router-dom'

function Header() {
	return (
		<header>
			<h1 style={headerStlye}> TO DO LIST:</h1>
			<Link style={linkStyle} to="/">HOME</Link>
			<Link style={linkStyle} to="/about">ABOUT</Link>
		</header>
		)
}


const headerStlye = {
	postiion: 'center',
	fontWeight: '20px',
	color: 'white',
	backgroundColor: 'darkgrey'
}

const linkStyle = {
	textDecloration: 'none',
	color: 'white',
	backgroundColor: 'darkgrey',
	padding: '0 10rem'
}

export default Header; 