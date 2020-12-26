import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {NameForm,Checkedbox} from './Home'

const Wrap= styled.div`
    display:grid;
    box-sizing: border-box;
    max-width: 75rem;
    background-color:#dbe9e5;
    margin: 2rem auto;
    padding 1em;
    gap: 1em;
    h1{
        padding-left: 1em;
    }
    .rezervisi{
        text-align: right;
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
        p{
            font-weight: bold;
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
                <p>Odabrani model:</p>
                <p>Odaberite datum izdavanja:</p>
                <p>Odaberite datum povratka:</p>
                <p>Odabrani broj dana:</p>
                <p>Ukupna cijena:</p>
            </div>
            <img src="/slika1.jpg" alt=""/>
        </Det>
        <h1>Unesite podatke vozača</h1>
        <div className="detalji">
                <p>Ime i prezime: <NameForm/></p>
                <p>Email: <NameForm/></p>
                <p>Broj telefona: <NameForm/></p>
                <p>Broj vozačke dozvole: <NameForm/></p>
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
                <p>Vlasnik kartice:<NameForm/></p>
                <p>Broj kartice:<NameForm/></p>
                <p>CVC:<NameForm/></p>
                <div className="inostranstvo"><Checkedbox/>Prihvatam uslove korištenja <a href="#">Link</a></div>
        </div>
        
        <div className="rezervisi">
            <Button variant="contained" color="primary">Potvrdi</Button>
        </div>
        </Wrap>
    )
  }