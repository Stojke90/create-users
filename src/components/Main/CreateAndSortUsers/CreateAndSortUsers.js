import React from 'react';
import "./CreateAndSortUsers.css";

const CreateAndSortUsers = (props) => {
	return(
		<div className='btnWrap'>
			<button className='btnUser sort' type="button" >Sort users by name</button>
			<button className='btnUser new'  type="button" onClick={props.itemClick}>Create new user</button>
		</div>
	);
};

export default CreateAndSortUsers;