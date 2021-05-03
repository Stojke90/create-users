import React from 'react';
import './Popup.css';

const Popup = (props) => {



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
						onChange={props.name}
					/>
				</div>

				<div className='data middle'>
					<p>Age:</p>
					<input 
						required 
						type='number' 
						id='age' 
						placeholder = 'user age' 
						onChange={props.age}
					/>
				</div>


			<div className='gender middle'>
					<p>Gender:</p>
				    <input type="radio" 
				    	id="male" 
				    	name="gender" 
				    	value="male" 
				    	required
				    	onChange={props.gender}
				    />
  					<label htmlFor="male">Male</label>

  					<input type="radio" 
  						id="female" 
  						name="gender" 
  						value="female" 
  						required
  						onChange={props.gender}
  					/>
  					<label htmlFor="female">Female</label>
			</div>

			<div className='btnPop'>
				<button onClick={props.onPopupClose}>Close</button>
				<button onClick={props.pushUser}>Save</button>
			</div>

		</section>
	);
}

export default Popup;