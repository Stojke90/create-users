import React from 'react';
import "./CreateAndSortUsers.css";

const CreateAndSortUsers = (props) => {
	
	return(
		<div className='btnWrap'>
			<button 
				className='btnUser sort' 
				type="button" 
				onClick={props.sortByName}>Sort users A-Z
			</button>

			<button 
				className='btnUser sort' 
				type="button" 
				onClick={props.sortByNameReverse}>Sort users Z-A
			</button>

			<button 
				className='btnUser new'  
				type="button" 
				onClick={props.createNewUser}>Create new user
			</button>
		</div>
	);
};

export default CreateAndSortUsers;