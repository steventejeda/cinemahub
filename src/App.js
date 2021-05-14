import React from 'react';
import './App.css';
import {BrowserRouter } from "react-router-dom";
import Routes from "./routes"
import UserContext from "./components/UserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";



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
