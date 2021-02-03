import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Appl = styled.div`
  .auto{
      
    box-shadow: 1px 1px 5px 1px #5d5d5d;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-radius: 5px;
    text-decoration: none;
    grid-template-rows: 200px;
    &:hover{
      background: #fffefc;
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
      padding: 1.5em;
      text-decoration: none;
      display: inline-block;
      border-right: 1px solid black;
      text-align:left;
      color:black;
      .viseDetalja{
        padding: 1em;
        .pogledajte{
          text-align:right;
        }
      }
    }
    .cijena{
      display: inline-block;
      text-align:center;
      padding:1.5em;
      text-decoration: none;
      color:black;
      div{
        font-size:30px;
        padding:1em;
        p{
          font-size:12px;
          margin:0;
        }
      }
  }
`;

class Filteri{
  CijenaPocetna= 0;
  CijenaKrajnja= 99999;
  DatumPocetni= new Date();
  DatumKrajnji= new Date();
  auto= '';
  BrojVrata= 0;
  BrojSjedista= 0;
  klima= false;
  senzor= false;
  karton= false;
  automatik= false;
}


class Datumi{
  dan=null;
  mjesec=null;
  godina=null;
  dan2=null;
  mjesec2=null;
  godina2=null;
}
let months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12"
};

export const Auto=({carFilter, carData, datum})=> {
    const filtriraniDatum=new Datumi();
    const dostupniDatum=new Datumi();
    //eval returns number
    //dostupniDatum.dan=carData.DatumPocetni.s
    if(carFilter.Filter){
      if(carFilter.CijenaPocetna>carData.cijena) return null;
      if(carFilter.CijenaKrajnja<carData.cijena) return null;
      if(carFilter.auto!=carData.prozvođač){
        if(carFilter.auto!="none") return null;  
      }
      if(carFilter.BrojSjedista!=carData.broj_sjedišta){
        if(carFilter.BrojSjedista!='none') return null; 
      }
      if(carFilter.BrojVrata!=carData.broj_vrata){
        if(carFilter.BrojVrata!='none') return null; 
      }
      if(carFilter.klima==true && carData.klima==false) return null
      if(carFilter.senzor==true && carData.parking_senzor==false) return null
      if(carFilter.automatik==true && carData.automatik==false) return null
      if(carFilter.karton==true && carData.zeleni_karton==false) return null
     
    }
    
    console.log(datum[carData.idvozila-1].datum_poc)
    console.log((carFilter.DatumPocetni.toString()).substring(8,10))
    return (
     <Appl>
       
        <Link class="auto" to={{
          pathname: '/details',
          search: `?model=${carData.idvozila}`
        }}>
            <img src={carData.slika} alt=""/>
            <li class="detalji"><b>Detalji auta: </b>
              <div className="viseDetalja">
                <div><b>Proizvođač: </b>{carData.prozvođač}</div>
                <div><b>Model: </b>{carData.model}</div>
                <div><b>Godište: </b>{carData.godiste}</div>
                <div><b>Gorivo: </b>{carData.gorivo}</div>
                <div className="pogledajte"><b>Pogledajte više...</b></div>
              </div>
            </li>
            <li class="cijena"><b>Cijena auta: </b>
              <div><b>{carData.cijena} KM</b><p>po danu</p></div>
              
            </li>
        </Link>
    </Appl>
    )
  
}