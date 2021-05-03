import React, { useState } from 'react';
import './Main.css';
import CreateAndSortUsers from './CreateAndSortUsers/CreateAndSortUsers';
import User from './User/User';
import Popup from './Popup/Popup';
import uuid from 'react-uuid';

const Main = (props) => {
console.log(props.sortUser)
	const [popupActive, setPopupActive] = useState(false);
	// set user datas as object
	const [user, setUser] = useState({
		name: "",
		age: '',
		gender: "",
		id:''
	});

	const [users, setUsers] = useState([]);
	// push user in array of objects and reset user state,and close popup
	const heandlePushUser = () => {
		setUsers([...users, user]);
		setUser({
		    name: "",
		    age: '',
		    gender: "",
		    id:''
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
			} else {
				return users.map(data => <User key={uuid()} data={data}/>);
			}
			
		}
		
	};

	return(
		<main>
			<CreateAndSortUsers itemClick={() => setPopupActive(true)}/>
			{popupActive && <Popup onPopupClose={() =>setPopupActive(false)} 
									name={e => setUser({ ...user, name: e.target.value })}
									age={e => setUser({ ...user, age: e.target.value })}
									gender={e => setUser({ ...user, gender: e.target.value })}
									pushUser={heandlePushUser}
							/>}
			<ul id='users'>
				{showUsers()}
			</ul>
		</main>
	);
};

export default Main;