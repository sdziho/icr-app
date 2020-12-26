import React from 'react';
import styled from 'styled-components';

const Nav= styled.ul`
    background-color: #90c3fd;
    dislay: flex;
    color: white;
    text-align: left;
    font-size: 16px;
    margin: 0;
    .Li{
        display: inline-block;
        font-size: 18px;
        padding: 1em;
        padding-left: 3em;
        .tab{
            color: white;
            text-decoration:none;
            &:hover{
                color: #838688;
              }
        }
        
      }
    
`
export const Header = () => {
    return (
    <Nav>
        <li class="Li"><a href="/home" class="tab">Home</a></li>
        <li class="Li"><a href="/about" class="tab">O nama</a></li>
        <li class="Li"><a href="/contact" class="tab">Kontakt</a></li>  
    </Nav>
    
    )
  }