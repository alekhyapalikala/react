import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import './App.css';

import Sidenavbar from './Components/Sidenavbar';
import Tasklist from './Components/Tasklist';
import Statistics from './Components/Statistics';
import Services from './Components/Services';
import Dashboard from './Components/Dashboard';
import Data from './Components/Data';
import Cupcakes from './Components/Cupcakes';
import Icecreams from './Components/Icecreams';
import Mashmallow from './Components/Mashmallow';
import Sandwich from './Components/Sandwich';
import Cookies from './Components/Cookies';
import Nougat from './Components/Nougat';
function App() {
  return (
   <>
   <Router>
   <Row className='bg'> 
    
    <Col sm={2} className='one'>
    <Sidenavbar/>
    
    </Col>
    <Col sm={10}>
    <Routes>
    <Route path='/react'exact Component={Dashboard}/>
   
      <Route path='/Statistics' exact Component={Statistics}/>
      <Route path='/Services' exact Component={Services}/>
      <Route path='/Tasklist' exact Component={Tasklist}/>
      <Route path='/Data' exact Component={Data}/>
      <Route path='/Cupcakes' exact Component={Cupcakes}/>
      <Route path='/Icecreams' exact Component={Icecreams}/>
      <Route path='/Mashmallow' exact Component={Mashmallow}/>
      <Route path='/Sandwich' exact Component={Sandwich}/>
      <Route path='/Cookies' exact Component={Cookies}/>
      <Route path='/Nougat' exact Component={Nougat}/>

      </Routes>
    </Col>
   </Row>
   </Router>
   </>
    
    
  )
}

export default App

