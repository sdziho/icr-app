import './App.css';
import {Header} from "./Components/Header"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Details} from "./Components/Details"
import {Payment, GetInfo} from "./Components/Payment"
import {Contact} from "./Components/Contact"
import {CheckOut} from "./Components/CheckOut"
import {Login} from "./Login/Login"
import {Route, BrowserRouter as Router} from "react-router-dom"
import styled from 'styled-components';
import { useState } from "react";


const Appl= styled.div`
  
    
  
`

function App() {
  return (
    <Appl>
      <Header />
      <Router>
        <Route path="/about" exact component={About}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/details" exact component={Details}/>
        <Route path="/payment" exact component={GetInfo}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/checkout" exact component={CheckOut}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
      </Router>
    </Appl>
    
  );

  
}

export default App;
