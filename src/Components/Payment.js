import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Checkedbox} from '../Forms/Checked'
import { NameForm, TekstForm } from '../Forms/NameForm';
import { DataPckr } from '../Forms/DataPicker';
import Axios from "axios"; 

const Wrap= styled.div`
    display:grid;
    box-sizing: border-box;
    max-width: 75rem;
    background-color:#dedede;
    margin: 2rem auto;
    padding 1em;
    gap: 1em;
    box-shadow: 2px 2px 5px 2px #4f5152;
    h1{
        padding-left: 1em;
    }
    .rezervisi{
        text-align: right;
        text-decoration: none;
        .dugme{
            background-image: linear-gradient(#880000, black);
            color:white
        }
    }
    &:hover{
        border-bottom: 2px solid black;
        border-radius: 5px;
    }
    .detalji{
        padding-left: 3em;
        .nacinPlacanja{
            display: flex;
            .nacin{
                padding-left: 1em;
                p{
                    display:flex;
                }
            }
        }
        p{
            font-weight: bold;
            display:grid;
            max-width: 30rem;
            grid-template-columns: 1fr 1fr;
        }
        
    }
    .inostranstvo{
        display:flex;
        margin: 0;
        a{
            padding-left: 1em;
        }
    }

`
const Det= styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:1em;
    

    img{
        width: 75%;
        height: 100%;
        object-fit: cover;
    }
    .detalji{
        padding-left: 3em;
        padding-bottom:5em;
        div{
            font-weight: bold;
        }
        .datum{
            display:grid;
            grid-template-columns: 1fr 1fr;

        }
    }
    .cijena{
        padding-left: 1em;
        .price{ 
            font-size: 28px;
            font-weight: bold;
        }
    }
`

export class Payment extends React.Component {
    constructor(){
        super()
    }
    callBack = (childData) => {
    }
    
    render(){
    
    return (
        <Wrap>
        <h1>Rezervacija automobila</h1>
        <Det>
            <div className="detalji">
                <div>Odabrani model: {this.props.vozilaList.prozvođač} {this.props.vozilaList.model}</div>
                <br></br>
                <div className="datum"><div>Odaberite datum izdavanja:</div> <DataPckr parentCallback={this.callBack}/></div>
                <br></br>
                <div className="datum"><div>Odaberite datum povratka:</div><DataPckr parentCallback={this.callBack}/></div>
                <br></br>
                <div>Odabrani broj dana:</div>
                <br></br>
                <div>Ukupna cijena: </div>
            </div>
            <img src={this.props.vozilaList.slika} alt=""/>
        </Det>
        <h1>Unesite podatke vozača</h1>
        <div className="detalji">
                <p>Ime i prezime: <TekstForm placeho="Sadzid Dziho" parentCallback={this.callBack}/></p>
                <p>Email: <TekstForm placeho="primjer@gmail.com" parentCallback={this.callBack}/></p>
                <p>Broj telefona: <NameForm clear={true} placeho="38761555666" parentCallback={this.callBack}/></p>
                <p>Broj vozačke dozvole: <TekstForm placeho="1E788G" parentCallback={this.callBack}/></p>
                <div className="nacinPlacanja">
                    <p>Odaberite način plaćanja:</p>
                    <div className="nacin">
                        <p><Checkedbox parentCallback={this.callBack}/>Puna cijena</p>
                        <p><Checkedbox parentCallback={this.callBack}/>Samo avans (20%)</p>
                    </div>
                </div>
                <div className="inostranstvo"><Checkedbox parentCallback={this.callBack}/>Planiram putovati u inostranstvo</div>
        
        </div>
        <h1>Unesite podatke za napalatu</h1>
        <div className="detalji">
                <p>Vlasnik kartice:<TekstForm placeho="Sadzid Dziho" parentCallback={this.callBack}/></p>
                <p>Broj kartice:<NameForm clear={true} placeho="16 znamenki" parentCallback={this.callBack}/></p>
                <p>CVC:<NameForm clear={true} placeho="3 znamenke" parentCallback={this.callBack}/></p>
                <div className="inostranstvo"><Checkedbox parentCallback={this.callBack}/>Prihvatam uslove korištenja <a href="#">Link</a></div>
        </div>
        
        <a className="rezervisi" href="/checkout">
            <Button className="dugme"variant="contained" color="primary">Potvrdi</Button>
        </a>
        </Wrap>
    )
    }
  }


export const GetInfo=()=>{
    const [idvozila,setidvozila]=useState(window.location.href)
    const [vozilaList, setVozilaList] = useState([]);

    useEffect(()=>{
        if(idvozila[idvozila.length-2]=="=")
            getVozila(idvozila.substr(idvozila.length-1))
        else
            getVozila(idvozila.substr(idvozila.length-2))
            

    },[])
    const getVozila = (id) => {
        Axios.get(`http://localhost:3001/vozila/${id}`).then((response) => {
            setVozilaList(response.data);
        });
    };
    return(
        <Payment vozilaList={vozilaList} />
    )
}
