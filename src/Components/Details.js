import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Axios from "axios"; 
import { Link } from 'react-router-dom';

const Wrap= styled.div`
    display:grid;
    box-sizing: border-box;
    max-width: 75rem;
    background-color:#dedede;
    margin: 2rem auto;
    padding 2em;
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

`
const Det= styled.div`
    
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    

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

export const Details =()=> {
    
    const [idvozila,setidvozila]=useState(window.location.href)
    const [vozilaList, setVozilaList] = useState([]);
    const [karton, setKarton] = useState('DA');
    const [klima, setKlima] = useState('DA');
    const [senzor, setSenzor] = useState('DA');
    const [automatik, setAutomatik] = useState('NE');

    console.log(idvozila[idvozila.length-2])
    useEffect(()=>{
        if(idvozila[idvozila.length-2]=="=")
            getVozila(idvozila.substr(idvozila.length-1))
        else
            getVozila(idvozila.substr(idvozila.length-2))
            

    },[])
    const getVozila = (id) => {
        Axios.get(`http://localhost:3001/vozila/${id}`).then((response) => {
            setVozilaList(response.data);
            if(!response.data.klima) setKlima('NE')
            if(!response.data.parking_senzor) setSenzor('NE')
            if(!response.data.zeleni_karton) setKarton('NE')
            if(response.data.automatik) setAutomatik('DA')
        });
    };
   
        return (
            <Wrap>
                <h1>{vozilaList.prozvođač} {vozilaList.model}</h1>
                <Det>
                    <img src={vozilaList.slika} alt=""/>
                    <div className="detalji">
                        <p>Proizvođač: {vozilaList.prozvođač}</p>
                        <p>Model: {vozilaList.model}</p>
                        <p>Godište: {vozilaList.godiste}</p>
                        <p>Gorivo: {vozilaList.gorivo}</p>
                        <p>Broj vrata: {vozilaList.broj_vrata}</p>
                        <p>Broj sjedišta: {vozilaList.broj_sjedišta}</p>
                        <p>Parking senzor: {senzor}</p>
                        <p>Klima: {klima}</p>
                        <p>Zeleni karton: {karton}</p>
                        <p>Automatik: {automatik}</p>
                    </div>
                    <div className="cijena">
                        <p className="price">Cijena: {vozilaList.cijena} KM</p>
                        <p>Dostupan od:</p>
                    </div>
                </Det>
                
                <Link className="rezervisi" to={{
                    pathname: '/payment',
                    search: `?model=${vozilaList.idvozila}`
                    }}>
                    <Button className="dugme" variant="contained" color="#880000">Rezerviši</Button>
                </Link>
                
            </Wrap>

        )
    
  }