import React, { useState } from 'react';
import './User.css';

const User = ({data, editUser, cloneUser, deleteUser}) => {

	const [edit, setEdit] = useState(true);

	const [user, setUser] = useState({
	  	name: data.name,
	    age: data.age,
	    gender: data.gender
	})

	const showEditor = () => {
	    setEdit(false);
  	};

  	const saveEdit = () => {
	    console.log(user);
	    setEdit(true);
  	};

  	const toogleClass = () => {
  		if(edit) {
  			return "inactiveInput";
  		}else {
  			return "editableInput";
  		}
  	}


	return (

		<section className = 'card'>

			<img src={"https://bit.ly/3xwEF6i"} alt='user_image'/>

			<article className="wraper"><p>Name: </p>
				<input 
					type="text" 
					className={toogleClass()} 
					onChange={e => setUser({...user,name: e.target.value})} 
					value={user.name} 
					disabled={edit} 
				/>
			</article>

			<article className="wraper"><p>Age: </p>
				<input 
					type="text" 
					className={toogleClass()} 
					onChange={e => setUser({...user,age: e.target.value})} 
					value={user.age} 
					disabled={edit} 
				/>
			</article>

			<article className="wraper"><p>Gender: </p>
				<input 
					type="text" 
					className={toogleClass()} 
					onChange={e => setUser({...user,gender: e.target.value})} 
					value={user.gender} 
					disabled={edit} 
				/>
			</article>

			{!edit && <button onClick={() => saveEdit(user)}>Save changes</button>}
			<button onClick={() => showEditor()}>Edit user</button>
			<button onClick={() => cloneUser(data.id)}>Clone user</button>
			<button onClick={() => deleteUser(data.id)}>Delete user</button>

		</section>

	)
}

export default User;