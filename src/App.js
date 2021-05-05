import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"

// import Header from './components/Header';
// import Nav from './components/Nav';
// import Results from './components/Results';
// import Requests from "./components/Requests";

function App() {
  // const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending);

  return (
    <div className>
    {/* Header */}
    {/* <Header/> */}

    {/* Nav */}
    {/* <Nav setSelectedOption={setSelectedOption}/> */}

    {/* Results */}
    {/* <Results selectedOption={selectedOption} /> */}

    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />

    </Router>
    
    </div>


  );
}

export default App;
