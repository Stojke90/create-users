import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
	
	const [sortUser, setSortUser] = useState('');

	const onItemClick = (searchValue) => {
		setSortUser(searchValue);
	}

  return (
    <>
        <Header onItemClick={onItemClick}/>
        <Main sortUser={sortUser} />
    </>
  );
}

export default App;
