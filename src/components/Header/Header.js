import React, { useState } from 'react';
import './Header.css';

const Header = ({onItemClick}) => {

	const[searchValue, setSearchValue] = useState('');

	const handleKeyDown = e => {
	    if (e.key === "Enter") {
	      onItemClick(searchValue);
	    }
	  };
	  
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
						onKeyPress={handleKeyDown}
				/>
			<button id='btn' onClick={() => onItemClick(searchValue)}>Search</button>
		</header>
		</>
	);
};

export default Header;