import React from 'react';
import "./CreateAndSortUsers.css";

const CreateAndSortUsers = ({sortByName,sortByNameReverse,createNewUser}) => {
	
	return(
		<div className='btnWrap'>
			<button 
				className='btnUser sort' 
				type="button" 
				onClick={sortByName}>Sort users A-Z
			</button>

			<button 
				className='btnUser sort' 
				type="button" 
				onClick={sortByNameReverse}>Sort users Z-A
			</button>

			<button 
				className='btnUser new'  
				type="button" 
				onClick={createNewUser}>Create new user
			</button>
		</div>
	);
};

export default CreateAndSortUsers;