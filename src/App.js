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
import { useMemo, useState } from "react";
import { DataShare } from './DataProvider';



const Appl= styled.div`
  
    
  
`

function App() {
  const [user,setUser]=useState('none');
  const [login,setLogin]=useState(false);
  const providerValue=useMemo( () => ({login,setLogin}), [login,setLogin]);
  return (
    <Appl>
      <DataShare.Provider value={providerValue}>
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
      </DataShare.Provider>
    </Appl>
    
  );

  
}

export default App;
