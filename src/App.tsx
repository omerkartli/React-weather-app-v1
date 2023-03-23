import React, { useState } from 'react';
import './App.css'
// import Home from './views/Home';
import { MainContext } from './context';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './containers/Main';
import Search from './containers/Search';


function Routing() {

  const [latLon, setLatLon] = useState<string>();

  const someValue ={
    latLon,
    setLatLon
  }

  return (
    <MainContext.Provider value={someValue}>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </MainContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
        <Router>
          <Routing />
        </Router>
        {/* <MainPage /> */}
    </div>
  );
}

export default App;
