import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Search from "./Pages/Search";



function App() {

  return (
    <div>

    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/search" component={Search} />
    </Router>
    
    </div>


  );
}

export default App;
