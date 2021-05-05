import React from 'react';
import './User.css';

const User = (props) => {

	return (

		<section className = 'card'>

			<img src={"https://bit.ly/3xwEF6i"} alt='user_image'/>

			<p><span>Name: </span>{props.data.name}</p>
			<p><span>Age: </span>{props.data.age}</p>
			<p><span>Gender: </span>{props.data.gender}</p>

			<button onClick={() => props.editUser(props.data.id)}>Edit user</button>
			<button onClick={() => props.cloneUser(props.data.id)}>Clone user</button>
			<button onClick={() => props.deleteUser(props.data.id)}>Delete user</button>

		</section>

	)
}

export default User;