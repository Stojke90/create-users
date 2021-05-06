import React, { useState } from 'react';
import './Main.css';
import CreateAndSortUsers from './CreateAndSortUsers/CreateAndSortUsers';
import User from './User/User';
import Popup from './Popup/Popup';
import uuid from 'react-uuid';

const Main = ({sortUser}) => {

	const [popupActive, setPopupActive] = useState(false);

	// all users
	const [users, setUsers] = useState([
			{name:'Marko',age: 31,gender:'male',id:1},
			{name:'Stefan',age: 27,gender:'male',id:2},
			{name:'Ivana',age: 32,gender:'female',id:3},
	]);

	// push user in array of objects and reset user state,and close Popup
	const heandlePushUser = (receiveduser) => {
	    setUsers([...users, receiveduser]);
	    setPopupActive(false);
	};

	//search user by name age or gender
	const findUsers = (namesUsers) => {
		return namesUsers.filter(nameUser => nameUser.name.toLowerCase().indexOf(sortUser.toLowerCase()) > -1 || nameUser.age.toString().indexOf(sortUser) > -1 || nameUser.gender.toLowerCase().indexOf(sortUser.toLowerCase()) > -1);
	}

	// show users
	const showUsers = () => {
		// if(users.name && users.age && users.gender)
		if(users.length === 0){
			return <p className="emptyParagraf" style={{marginRight: 'auto'}}>No users</p>
		}
		if(sortUser){
			return findUsers(users).map(data => <User data={data}/>)
		} 
		if(users) {
			return users.map((data,index) => 
				<User data={data} key={uuid()} deleteUser={deleteUser} cloneUser={cloneUser}/>);
		};
			
		
		
	};

	const cloneUser = (id) => {
		const findUserById = users.find(user => user.id === id);
		setUsers([...users,{...findUserById, id:findUserById.id + 'clone'}]);
	};

	const deleteUser = (id) => {
		setUsers([...users.filter(user => user.id !== id)]);
	};

	const sortByName = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name))]);
	};

	const sortByNameReverse = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name)).reverse()]);
	};
console.log(users)
	return(
		<main>

			<CreateAndSortUsers 
				sortByName={sortByName} 
				sortByNameReverse={sortByNameReverse} 
				createNewUser={() => setPopupActive(true)}
			/>
			
			{popupActive && <Popup onPopupClose={() =>setPopupActive(false)} pushUser={heandlePushUser}/>}

	        <div id="users">
	            {showUsers()}
	        </div>

		</main>
	);
};

export default Main;