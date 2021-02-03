import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { TekstForm } from '../Forms/NameForm';

const Wrap= styled.div`
    margin: 2rem auto;
    max-width: 75rem;
    padding: 1em;
    .send{
        padding: 1em;
        display:grid;
        grid-template-columns: 1fr 1fr;
        .mess{
            display:grid;
            max-width:100%;
            grid-template-columns: 1fr 1fr;
            div{
                form{
                    label{
                        .poruka{
                            width:170%;
                            height:200px;
                        }
                    }
                }
                
            }
        }
    }
    h1{
        text-align:center;
    }
    .posalji{
        padding:1em;
        .dugme{
            background-image: linear-gradient(#880000, black);
            color:white;
        }
    }

`
export const Contact = () => {
    return (
        <Wrap>
            <h1>Imate pitanja za nas?</h1>
            <h1>KONTAKTIRAJTE NAS</h1>
            <div className="send">
                <div className="mess">
                    <div>Ime i prezime<TekstForm /></div>
                    <div>Email<TekstForm/></div>
                    <div>Poruka
                        <form >
                            <label>
                            <input className="poruka" type="string" />
                            </label>
                        </form>
                    </div>
                </div>
                <div>
                    <p>Naši agenti će vam odgovoriti u najkraćem mogućem roku</p>
                    <p>Adresa: Ljubljanska 2,71000 Sarajevo,BiH</p>
                    <p>E mail: kontakt@rentacar.ba</p>
                    <p>Radno vrijeme: 00:00-24:00</p>
                </div>
            </div>
            <div className="posalji">
            <Button className="dugme" variant="contained" color="#880000">Pošalji</Button>
            </div>
        </Wrap>

        )
  }