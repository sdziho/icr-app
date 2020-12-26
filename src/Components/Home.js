import React from 'react';
import styled from 'styled-components';
import {Route, BrowserRouter as Router} from "react-router-dom"

const Nav= styled.ul`
    * {
        box-sizing: border-box;
        
    }
    max-width: 75rem;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    
      .lijevo {
        padding: 1em;
        border: 1px solid black;
        text-align:left;
        background: #dbe9e5;
        right-border: 0px;
        border-radius: 5px;
      }
      
      .desno {
        padding: 15px;
        border: 1px solid black;
        background: #dbe9e5;
        display: grid;
        grid-gap: 1em;
        .auto{
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          border: 1px solid black;
          border-radius: 5px;
          text-decoration: none;
          &:hover{
            background: #eefdf9;
            border-bottom: 2px solid black;
          }
          
          img { 
            width: 100%;
            height: 100%;
            object-fit: cover;
            float:left;
            border-right: 1px solid black; 
            
          }
          .detalji{
            display: inline-block;
            border-right: 1px solid black;
            text-align:left;
          }
          .cijena{
            display: inline-block;
            text-align:center;
          }
        }
  
      }
`


const Na= styled.ul`
    padding: 1em;
    background: #dbe9e5;;
    dislay: flex;
    color: white;
    text-align: left;
    font-size: 9px;
    margin: 0;
    .Li{
        display: inline-block;
        font-size: 14px;
        padding: 1em;
        .tab{
            color: black;
            text-decoration:none;
            &:hover{
                color: #838688;
              }
        }
        
      }
    
`

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </label>
        
      </form>
      );
    }
  }

  class OdabirAuta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'audi'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="audi">Audi</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </label>
        </form>
      );
    }
  }


  export class Checkedbox extends React.Component{
    constructor(){
      super();
      this.state = { checked: false }
    }
    handleCheck = () => {
        this.setState({checked: !this.state.checked })
    }
    render(){
        return (
               <div>
                   <input type="checkbox"  id="mybox" onChange={this.handleCheck}
                          defaultChecked={this.state.checked}/>
               </div>
        )
    };
}

export const Home = () => {
    return (
    <Nav>
        <div class="lijevo">
            <p>Unesite cijenu:</p>
                od: <NameForm></NameForm>
                do: <NameForm></NameForm>
            <p>Unesite datum:</p>
                od: <NameForm></NameForm>
                do: <NameForm></NameForm> 
            <p>Odaberite marku auta:</p>
                <OdabirAuta></OdabirAuta>
            <p>Odaberite broj vrata:</p>
                <OdabirAuta></OdabirAuta>    
            <p>Odaberite broj sjedišta:</p>
                <OdabirAuta></OdabirAuta>
            <Na>
                <li class="Li"><a href="#home" class="tab"><Checkedbox></Checkedbox></a></li>
                <li class="Li"><a href="#about" class="tab"> Klima</a></li>
            </Na>
            <Na>
                <li class="Li"><a href="#home" class="tab"><Checkedbox></Checkedbox></a></li>
                <li class="Li"><a href="#about" class="tab"> Klima</a></li>
            </Na>
            <Na>
                <li class="Li"><a href="#home" class="tab"><Checkedbox></Checkedbox></a></li>
                <li class="Li"><a href="#about" class="tab"> Klima</a></li>
            </Na>
            <Na>
                <li class="Li"><a href="#home" class="tab"><Checkedbox></Checkedbox></a></li>
                <li class="Li"><a href="#about" class="tab"> Klima</a></li>
            </Na>
        </div>
      
       <div class="desno">
            <a class = "auto" href="/details">
                <img src="/slika1.jpg" alt=""/>
                <li class="detalji">Detalji auta:</li>
                <li class="cijena">Cijena auta:</li>
            </a>
            <a class = "auto" href="/details">
                <img src="/slika2.jpg" alt=""/>
                <li class="detalji">Detalji auta:</li>
                <li class="cijena">Cijena auta:</li>
            </a>
            <a class = "auto" href="/details">
                <img src="/slika3.jpg" alt=""/>
                <li class="detalji">Detalji auta:</li>
                <li class="cijena">Cijena auta:</li>
            </a>
       </div>
    </Nav>
    )
}