import React, { useState, useEffect } from 'react';
import './Main.css';

import CreateAndSortUsers from './CreateAndSortUsers/CreateAndSortUsers';
import User from './User/User';
import Popup from './Popup/Popup';
import Arrow from './Arrow/Arrow';
import uuid from 'react-uuid';
import axios from 'axios';

const baseURL = 'https://cubes2021-b9e1d-default-rtdb.firebaseio.com/data';

const Main = ({sortUser}) => {

	// btn clik save cancel on Popup
	const [popupActive, setPopupActive] = useState(false);

	// all users
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	},[]);
console.log(users)
	// push user in array of objects and reset user state,and close Popup
	const pushUserAndClone = (receivedUser) => {
	    fetch(`${baseURL}.json`,{
	    	method: 'POST',
	    	body: JSON.stringify(receivedUser)
	    })
	    .then(rez => (rez.status === 200 || rez.status === 201) && getUsers())
	    .catch(error => alert(error))

	    setPopupActive(false);
	};

	// get users from server on our page
	const getUsers = () => {
		fetch(`${baseURL}.json`)
			.then(data => data.json())
			.then(results => {
				const newUsers = [];
				for(const key in results){
					newUsers.push({...results[key],id: key})
				}
				setUsers(newUsers)
			})
			.catch(error => alert(error))
	};

	// edit and save user find by id on server
	const modifiedUser = (passUser) => {
		fetch(`${baseURL}/${passUser.id}.json`,{
	    	method: 'PATCH',
	    	body: JSON.stringify(passUser)
	    })
	    .then(rez => (rez.status === 200 || rez.status === 201) && getUsers())
	    .catch(error => alert(error));
	};

	// delete user find by id in server
	const deleteUser = (id) => {
		fetch(`${baseURL}/${id}.json`,{method: 'DELETE'})
	    .then(rez => (rez.status === 200 || rez.status === 201) && getUsers())
	    .catch(error => alert(error));
	};

	//search user by name age or gender
	const findUsers = (namesUsers) => {
		return namesUsers.filter(nameUser => 
			nameUser.name.toLowerCase().indexOf(sortUser.toLowerCase()) > -1 || 
			nameUser.age.toString().indexOf(sortUser) > -1 || 
			nameUser.gender.toLowerCase().indexOf(sortUser.toLowerCase()) > -1
			);
	};
	// sort users bu name from A to Z
	const sortByName = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name))]);
	};
	// sort users bu name from Z to A
	const sortByNameReverse = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name)).reverse()]);
	};

	// show all cards with data of users
	const showUsers = () => {
		
		if(users.length === 0){
			return <p className="emptyParagraf" style={{marginRight: 'auto'}}>No users</p>
		};

		if(sortUser){
			return findUsers(users).map(data => <User data={data}/>)
		};

		if(users) {
			return users.map((data,index) => 
						<User 
							data={data} 
							key={uuid()} 
							modifiedUser={modifiedUser} 
							deleteUser={deleteUser} 
							cloneUser={pushUserAndClone}
						/>);
		};
		
	};

	return(
		<main>

			<CreateAndSortUsers 
				sortByName={sortByName} 
				sortByNameReverse={sortByNameReverse} 
				createNewUser={() => setPopupActive(true)}
			/>
			
			{popupActive && <Popup 
								onPopupClose={() =>setPopupActive(false)} 
								pushUser={pushUserAndClone}
							/>}

	        <div id="users">
	            {showUsers()}
	        </div>

	        <Arrow />

	        <p style={{fontStyle: 'italic'}}>by: Stojke90 <span role="img" aria-label="sunglasses" style={{fontStyle: 'initial'}}>😎</span></p>
		</main>
	);
};

export default Main;