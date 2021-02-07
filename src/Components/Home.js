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
import { GetVozila } from './GetVozila';
import DataProvider, { DataShare } from '../DataProvider';
import {connect} from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Nav= styled.ul`
    * {
        box-sizing: border-box;
        
    }
    max-width: 75rem;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 0.8fr 3fr;
      .lijevo {
        padding: 2em;
        text-align:left;
        background: #dedede;
        border-radius: 5px;
        border-right: 1px solid #3f4c52;
        box-shadow: 2px 2px 5px 2px #4f5152;
        .datum{
          
        }
        .tekst{
          padding-top:1em;
          font-weight: bold;
          padding-bottom:0.5em;
        }
        .filtriraj{
          text-align:center;
          padding-top:2em;
          display:grid;
          display-template-columns: 1fr 1fr;
          grid-gap:1em;
          .dugme{
            background-image: linear-gradient(#880000, black);
            color:white
          }
        }
        .box{
          max-width: 10rem;
          padding-top: 1em;
          padding-left:1em;
          display:grid;
          grid-template-columns: 0.3fr 1fr;
        
        }
        .uvuci{
          padding-left:1em;
          
    
        }
      }
      
      .desno {
        border-radius: 5px;
        box-shadow: 2px 2px 5px 2px #4f5152;
        padding: 15px;
        background: #dedede;
        display: grid;
        grid-gap: 2em;
        .add{
          display:flex;
        }
        form{
          label{
            display:flex;
            select{
              margin-left:3px;
              border-radius:5px;
            }

          }
        }
  
      }
`


  

export class Home extends Component {
  state = { 
    CijenaPocetna: 0,
    CijenaKrajnja: 99999,
    DatumPocetni: '',
    DatumKrajnji:'',
    auto: 'none',
    BrojVrata: 'none',
    BrojSjedista: 'none',
    klima: false,
    senzor: false,
    karton: false,
    automatik: false,
    Filter: false,
    freeze:false,
    clear:true,
    ime:true,
    admin:true,
  }
  callbackPocetna = (childData) => {
    if(!this.state.freeze)
      this.setState({CijenaPocetna: childData});
      
    
  }
  callbackKrajnja = (childData) => {
    if(!this.state.freeze)
      this.setState({CijenaKrajnja: childData})
    
  }
  callbackDatum = (childData) => {
    if(!this.state.freeze){
      const [start, end] = childData;
      this.setState({DatumPocetni: start})
      this.setState({DatumKrajnji: end})
    }
    
  }
  callbackAuto = (childData) => {
    if(!this.state.freeze) this.setState({auto: childData})
  }
  callbackVrata = (childData) => {
    if(!this.state.freeze) this.setState({BrojVrata: childData})
  }
  callbackSjedista = (childData) => {
    if(!this.state.freeze) this.setState({BrojSjedista: childData})
  }
  callbackKlima = (childData) => {
    if(!this.state.freeze) this.setState({klima: childData})
  }
  callbackKarton = (childData) => {
    if(!this.state.freeze) this.setState({karton: childData})
  }
  callbackSenzor = (childData) => {
    if(!this.state.freeze) this.setState({senzor: childData})
  }
  callbackAutomatik = (childData) => {
    if(!this.state.freeze) this.setState({automatik: childData})
  }
  handleClick=()=>{
    this.setState({Filter:true})
    this.setState({freeze:true})
    this.setState({clear:false})
  }
  handleClick2=()=>{
    this.setState({Filter:false})
    this.setState({freeze:false})
    this.setState({clear:true})
  }
  handleClickSelect=(event)=>{
    if(event.target.value=="Ime")this.setState({ime:true})
    if(event.target.value=="Cijena")this.setState({ime:false})
  }
  render(){
    return (
    <Nav>
        <div class="lijevo">
            <div className="tekst">Cijena:</div>
                <div className="box"><div>od:</div> <NameForm placeho="KM" clear={this.state.clear} parentCallback = {this.callbackPocetna} /></div>  
                <div className="box"><div>do:</div> <NameForm placeho="KM" clear={this.state.clear}parentCallback = {this.callbackKrajnja} /></div>    
            <div className="tekst">Datum rezervacije:</div>
            
            <div className="datum"> <DataPckr parentCallback = {this.callbackDatum} /></div>
             
            <div className="tekst">Marka automobila:</div>
            <div className="uvuci">
                <OdabirAuta parentCallback = {this.callbackAuto} />
            </div>
            <div className="tekst">Broj vrata:</div>
            <div className="uvuci">
                <OdabirVrata parentCallback = {this.callbackVrata} /> 
            </div>
            <div className="tekst">Broj sjedišta:</div>
            <div className="uvuci">
                <OdabirVrata parentCallback = {this.callbackSjedista} />
            </div>
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
            <div className="filtriraj">
            { this.state.Filter ? 
              <Button variant="contained" className="dugme" onClick={this.handleClick2}>Poništi filter</Button> : 
              <Button variant="contained" className="dugme" onClick={this.handleClick}>Filtriraj</Button>
            }
            </div>
        </div>
      
       <div class="desno">
        
            <form>
              <label>
                <div>Sortiraj po:</div>
                <select onClick={this.handleClickSelect}>
                  <option value="Ime">Marki automobila</option>
                  <option value="Cijena">Cijeni</option>
                </select>
              </label>
            </form>
            {this.state.admin?
              <div className="add"><div>Dodaj novo auto </div><a href="#"><AddCircleOutlineIcon /></a></div>:null
            }
            <GetVozila info={this.state} />
       </div>
    </Nav>
    )
  }
}
