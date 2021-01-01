import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Checkedbox} from '../Forms/Checked'
import { NameForm, TekstForm } from '../Forms/NameForm';
import { DataPckr } from '../Forms/DataPicker';

const Wrap= styled.div`
    display:grid;
    box-sizing: border-box;
    max-width: 75rem;
    background-color:#dbe9e5;
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
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .detalji{
        padding-left: 3em;
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

export const Payment = () => {
    return (
        <Wrap>
        <h1>Rezervacija automobila</h1>
        <Det>
            <div className="detalji">
                <div>Odabrani model:</div>
                <br></br>
                <div className="datum"><div>Odaberite datum izdavanja:</div> <DataPckr/></div>
                <br></br>
                <div className="datum"><div>Odaberite datum povratka:</div><DataPckr/></div>
                <br></br>
                <div>Odabrani broj dana:</div>
                <br></br>
                <div>Ukupna cijena:</div>
            </div>
            <img src="/slika1.jpg" alt=""/>
        </Det>
        <h1>Unesite podatke vozača</h1>
        <div className="detalji">
                <p>Ime i prezime: <TekstForm placeho="Sadzid Dziho"/></p>
                <p>Email: <TekstForm placeho="primjer@gmail.com"/></p>
                <p>Broj telefona: <NameForm placeho="38761555666"/></p>
                <p>Broj vozačke dozvole: <NameForm placeho="1E788G"/></p>
                <div className="nacinPlacanja">
                    <p>Odaberite način plaćanja:</p>
                    <div className="nacin">
                        <p><Checkedbox/>Puna cijena</p>
                        <p><Checkedbox/>Samo avans (20%)</p>
                    </div>
                </div>
                <div className="inostranstvo"><Checkedbox/>Planiram putovati u inostranstvo</div>
        
        </div>
        <h1>Unesite podatke za napalatu</h1>
        <div className="detalji">
                <p>Vlasnik kartice:<TekstForm placeho="Sadzid Dziho"/></p>
                <p>Broj kartice:<NameForm placeho="12 znamenki"/></p>
                <p>CVC:<NameForm placeho="3 znamenke"/></p>
                <div className="inostranstvo"><Checkedbox/>Prihvatam uslove korištenja <a href="#">Link</a></div>
        </div>
        
        <a className="rezervisi" href="/checkout">
            <Button variant="contained" color="primary">Potvrdi</Button>
        </a>
        </Wrap>
    )
  }