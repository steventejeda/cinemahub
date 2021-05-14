import React, {useState} from 'react'
import "../styles/Home.css"
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import Requests from "../components/Requests";

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(Requests.fetchTrending);

    return (
        <div className="home">
    {/* Header */}
    <Header/>

    {/* Nav */}
    <Nav setSelectedOption={setSelectedOption}/>

    {/* Results */}
    <Results selectedOption={selectedOption} />
        </div>
    )
}

export default Home
