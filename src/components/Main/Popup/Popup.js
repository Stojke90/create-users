import React, { useState } from 'react';
import './Popup.css';
import uuid from 'react-uuid';

const Popup = ({onPopupClose, pushUser,index}) => {
	// set user datas as object
	const [user, setUser] = useState({
	    name: "",
	    age: "",
	    gender: "",
	    id: uuid(),
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
				<button onClick={() => pushUser(user)}>Confirm</button>
			</div>

		</section>
	);
}

export default Popup;