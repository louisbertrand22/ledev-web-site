import '../../App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllClasses from '../AllClasses/AllClasses';
import About from '../About/About';
import Test from '../Test/Test';



function App() {
  return (
    <Router>

      <Header />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cours" element={<AllClasses />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={ErrorPage}/>
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
