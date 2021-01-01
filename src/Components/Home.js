import React, { Component } from 'react';
import styled from 'styled-components';
import { NameForm } from '../Forms/NameForm';
import { DataPckr } from '../Forms/DataPicker';
import Button from '@material-ui/core/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { OdabirAuta, OdabirVrata } from '../Forms/Odabir';
import { Checkedbox } from '../Forms/Checked';
import { Auto } from './Auto';

const Nav= styled.ul`
    * {
        box-sizing: border-box;
        
    }
    max-width: 75rem;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
      .lijevo {
        padding: 2em;
        text-align:left;
        background: #dbe9e5;
        border-radius: 5px;
        border-right: 1px solid #3f4c52;
        box-shadow: 2px 2px 5px 2px #4f5152;
        .tekst{
          padding-top:1em;
        }
        .filtriraj{
          text-align:center;
          padding-top:1em;
        }
        .box{
          max-width: 10rem;
          padding-top: 1em;
          display:grid;
          grid-template-columns: 0.3fr 1fr;
          
        }
      }
      
      .desno {
        border-radius: 5px;
        box-shadow: 2px 2px 5px 2px #4f5152;
        padding: 15px;
        background: #dbe9e5;
        display: grid;
        grid-gap: 1em;
        
  
      }
`


  

export class Home extends Component {
  state = { 
    CijenaPocetna: 0,
    CijenaKrajnja: 99999,
    DatumPocetni: new Date(),
    DatumKrajnji: new Date(),
    auto: '',
    BrojVrata: 0,
    BrojSjedista: 0,
    klima: false,
    senzor: false,
    karton: false,
    automatik: false
  }
  callbackPocetna = (childData) => {
    this.setState({CijenaPocetna: childData})
  }
  callbackKrajnja = (childData) => {
    this.setState({CijenaKrajnja: childData})
  }
  callbackDatumPoc = (childData) => {
    this.setState({DatumPocetni: childData})
  }
  callbackDatumKraj = (childData) => {
    this.setState({DatumKrajnji: childData})
  }
  callbackAuto = (childData) => {
    this.setState({auto: childData})
  }
  callbackVrata = (childData) => {
    this.setState({BrojVrata: childData})
  }
  callbackSjedista = (childData) => {
    this.setState({BrojSjedista: childData})
  }
  callbackKlima = (childData) => {
    this.setState({klima: childData})
  }
  callbackKarton = (childData) => {
    this.setState({karton: childData})
  }
  callbackSenzor = (childData) => {
    this.setState({senzor: childData})
  }
  callbackAutomatik = (childData) => {
    this.setState({automatik: childData})
  }
  handleClick=()=>{
    console.log(this.state)
  }
  render(){
    return (
    <Nav>
        <div class="lijevo">
            <div>Unesite cijenu:</div>
                <div className="box"><div>od:</div> <NameForm placeho="KM" parentCallback = {this.callbackPocetna} /></div>  
                <div className="box"><div>do:</div> <NameForm placeho="KM" parentCallback = {this.callbackKrajnja} /></div>    
            <div className="tekst">Unesite datum:</div>
                <div>od: <DataPckr parentCallback = {this.callbackDatumPoc} /></div>
                <div>do: <DataPckr parentCallback = {this.callbackDatumKraj}/></div>       
            <div className="tekst">Odaberite marku auta:</div>
                <OdabirAuta parentCallback = {this.callbackAuto} />
            <div className="tekst">Odaberite broj vrata:</div>
                <OdabirVrata parentCallback = {this.callbackVrata} /> 
            <div className="tekst">Odaberite broj sjedišta:</div>
                <OdabirVrata parentCallback = {this.callbackSjedista} />
            <div className="box">
              <Checkedbox parentCallback = {this.callbackKlima}/>
              <div>Klima</div>
            </div>
            <div className="box">
              <Checkedbox parentCallback = {this.callbackSenzor}/>
              <div>Parking senzor</div>
            </div>
            <div className="box">
              <Checkedbox parentCallback = {this.callbackKarton}/>
              <div>Zeleni karton</div>
            </div>
            <div className="box">
              <Checkedbox parentCallback = {this.callbackAutomatik}/>
              <div>Automatik</div>
            </div>
        </div>
      
       <div class="desno">
            <Auto info={this.state}/>
            <Auto info={this.state}/>
            <Auto info={this.state}/>
            <Auto info={this.state}/>
       </div>
    </Nav>
    )
  }
}