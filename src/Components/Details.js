import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { DataShare } from '../DataProvider';

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

`
const Det= styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    

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

export const Details = () => {
    return (
        <Wrap>
        <h1>Audi A4</h1>
        <Det>
            <img src="/slika1.jpg" alt=""/>
            <div className="detalji">
                <p>Marka:</p>
                <p>Model:</p>
                <p>Gorivo:</p>
                <p>Broj vrata:</p>
                <p>Godište:</p>
            </div>
            <div className="cijena">
                <p className="price">Cijena:</p>
                <p>Dostupan od:</p>
            </div>
        </Det>
        <a className="rezervisi" href="/payment">
            <Button variant="contained" color="primary">Rezerviši</Button>
        </a>
        </Wrap>
    )
  }