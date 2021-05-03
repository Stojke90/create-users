import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {

	const[searchValue, setSearchValue] = useState('');

	return(
		<>
		<header id='header'>
			<h1>Face<span>App</span></h1>
				<input id='searchUser' 
						type='text' 
						name='search' 
						placeholder='Search user' 
						onChange={e => setSearchValue(e.target.value)} 
						value={searchValue}
				/>
			<button id='btn' onClick={() => props.onItemClick(searchValue)}>Search</button>
		</header>
		</>
	);
};

export default Header;