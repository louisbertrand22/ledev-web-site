import '../../App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import Cours from '../Cours/Cours';
import AllClasses from '../AllClasses/AllClasses';

function App() {
  return (
    <Router>

      <Header />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cours" element={<AllClasses />} />
          
          <Route component={ErrorPage}/>
        </Routes>

      <Footer />

    </Router>
  );
}

export default App;
