import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import Requests from "./components/Requests"

function App() {
  const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending);

  return (
    <div className="app">
    {/* Header */}
    <Header/>

    {/* Nav */}
    <Nav setSelectedOption={setSelectedOption}/>

    {/* Results */}
    <Results selectedOption={selectedOption} />
    
    </div>


  );
}

export default App;
