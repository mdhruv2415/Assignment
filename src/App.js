import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import HomePage from './components/HomePage';
import Help from './components/Help';
import Form from './components/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  const url = 'https://api.tvmaze.com/search/shows?q=all';
  const[shows, setShows] = useState([]);
  const[summaryShow, setSummaryShow] = useState([]);

  async function fetchData ()  {
    const output =  (await axios.get(url)).data;
    setShows(output);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className="">

        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage data={shows} summaryShow={summaryShow} setSummaryShow={setSummaryShow}/>}/>
          <Route path='/summary' element={<Summary summaryShow={summaryShow} setSummaryShow={setSummaryShow}/>}/>
          <Route path='/help' element={<Help />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
