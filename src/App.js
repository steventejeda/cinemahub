import React from 'react';
import './App.css';
import {BrowserRouter } from "react-router-dom";
import Routes from "./routes"
import UserContext from "./UserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";
import CommentContextProvider from './contexts/CommentContext'



function App() {


	const [token, setToken] = useLocalStorageState("token", "");
	const [currUser, setCurrUser] = useLocalStorageState("username", "");


  return (
    <div>
    <BrowserRouter>  
    <UserContext.Provider
					value={{
						token,
						setToken,
						currUser,
						setCurrUser,
		
					}}
				>
    <Routes />
    </UserContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
