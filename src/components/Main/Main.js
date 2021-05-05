import React, { useState } from 'react';
import './Main.css';
import CreateAndSortUsers from './CreateAndSortUsers/CreateAndSortUsers';
import User from './User/User';
import Popup from './Popup/Popup';
import uuid from 'react-uuid';

const Main = (props) => {

	const [popupActive, setPopupActive] = useState(false);

	// set user datas as object
	const [user, setUser] = useState({
		name: "",
		age: '',
		gender: "",
		id:uuid()
	});

	const [users, setUsers] = useState([
			{name:'Marko',age: 31,gender:'male',id:1},
			{name:'Stefan',age: 27,gender:'male',id:2},
			{name:'Ivana',age: 32,gender:'female',id:3}
		]);
	// push user in array of objects and reset user state,and close popup
	const heandlePushUser = () => {
		setUsers([...users, user]);
		setUser({
		    name: "",
		    age: '',
		    gender: "",
		    id:uuid()
		});

		setPopupActive(false);
	};

	//search user by name age or gender
	const findUsers = (namesUsers) => {
		return namesUsers.filter(nameUser => nameUser.name.toLowerCase().indexOf(props.sortUser.toLowerCase()) > -1 || nameUser.age.toString().indexOf(props.sortUser) > -1 || nameUser.gender.toLowerCase().indexOf(props.sortUser.toLowerCase()) > -1);
	}

	// show users
	const showUsers = () => {
		if(users.length === 0){
			return <p className="emptyParagraf" style={{marginRight: 'auto'}}>No users</p>
		}else {
			if(props.sortUser){
				return findUsers(users).map(data => <User data={data}/>);
			} else if(users) {
				return users.map((data,index) => 
					<User data={data} key={uuid()} deleteUser={deleteUser} editUser={editUser} cloneUser={cloneUser}/>
				);
			}
			
		}
		
	};

	const editUser = (id) => {
		// const editUserById = 
		// console.log(users.map(user => user.id === id))
		// setUsers([editUserById]);
	}

	const cloneUser = (id) => {
		setUsers([...users,users.find(user => user.id === id)]);
	}

	const deleteUser = (id) => {
		setUsers([...users.filter(user => user.id !== id)]);
	}

	const sortByName = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name))]);
	}

	const sortByNameReverse = () => {
		setUsers([...users.sort((a, b) => a.name.localeCompare(b.name)).reverse()]);
	}

	return(
		<main>

			<CreateAndSortUsers 
				sortByName={sortByName} 
				sortByNameReverse={sortByNameReverse} 
				createNewUser={() => setPopupActive(true)}
			/>
			
			{popupActive && <Popup onPopupClose={() =>setPopupActive(false)} 
									name={e => setUser({ ...user, name: e.target.value })}
									age={e => setUser({ ...user, age: e.target.value })}
									gender={e => setUser({ ...user, gender: e.target.value })}
									pushUser={heandlePushUser}
							/>}

			<div id='users'>
				{showUsers()}
			</div>

		</main>
	);
};

export default Main;