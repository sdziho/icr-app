import React from 'react';
import styled from 'styled-components';


const Appl = styled.div`
  .auto{
      
    box-shadow: 1px 1px 3px 1px #4f5152;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-radius: 5px;
    text-decoration: none;
    grid-template-rows: 200px;
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
      padding: 1em;
      text-decoration: none;
      display: inline-block;
      border-right: 1px solid black;
      text-align:left;
    }
    .cijena{
      display: inline-block;
      text-align:center;
      padding:1em;
      text-decoration: none;
  }
`;


class Interface{
    Cijena=50;
    auto= 'bmw';
    BrojVrata= 5;
    BrojSjedista= 5;
    klima= true;
    senzor= true;
    karton= true;
    automatik= false;
}

export const Auto=({info})=> {
    const BMW=new Interface()
    if(info.automatik!=BMW.automatik) return null;
    return (
     <Appl>
        <a class = "auto" href="/details">
            <img src="/slika3.jpg" alt=""/>
            <li class="detalji">Detalji auta: </li>
            <li class="cijena">Cijena auta:</li>
        </a>
    </Appl>
    )
  
}