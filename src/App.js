import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'


// Components 

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
   <div className = 'App'>
    <Router>
      <Navbar />
      <Footer />
      </Router>
      
   </div>
   
  );
}

export default App;
