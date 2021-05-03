import React from 'react';
import './User.css';


const User = ({data}) => {
console.log(data.id)

	return (
		<section className = 'card'>

			<img src={"https://bit.ly/3xwEF6i"} alt='user_image'/>

			<p><span>Name: </span>{data.name}</p>
			<p><span>Age: </span>{data.age}</p>
			<p><span>Gender: </span>{data.gender}</p>

			<button>Edit user</button>
			<button>Clone user</button>
			<button>Delete user</button>

		</section>

	)
}

export default User;