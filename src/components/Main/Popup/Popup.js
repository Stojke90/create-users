import React, { useState } from 'react';
import './Popup.css';

const Popup = ({onPopupClose, pushUser}) => {

	// set user data as object and get user name,age and gender
	const [user, setUser] = useState({
	    name: "",
	    age: "",
	    gender: ""
	});


	return(
		<section className='create'>
			<h1>Create user</h1>
			
				<div className='data middle'>
					<p>Name:</p>
					<input 
						required 
						type='text' 
						id='name' 
						placeholder = 'user name' 
						onChange={e => setUser({...user,name: e.target.value})}
					/>
				</div>

				<div className='data middle'>
					<p>Age:</p>
					<input 
						required 
						type='number' 
						id='age' 
						placeholder = 'user age' 
						onChange={e => setUser({...user,age: e.target.value})}
					/>
				</div>


			<div className='gender middle'>
					<p>Gender:</p>
				    <input type="radio" 
				    	id="male" 
				    	name="gender"  
				    	required
				    	value='male'
				    	onChange={e => setUser({...user,gender: e.target.value})}
				    />
  					<label htmlFor="male">Male</label>

  					<input type="radio" 
  						id="female" 
  						name="gender"  
  						required
  						value='female'
				    	onChange={e => setUser({...user,gender: e.target.value})}
  					/>
  					<label htmlFor="female">Female</label>
			</div>

			<div className='btnPop'>
				<button onClick={onPopupClose}>Cancel</button>
				<button onClick={() => pushUser(user)} disabled={!user.name || !user.age || !user.gender}>Confirm</button>
			</div>

		</section>
	);
}

export default Popup;