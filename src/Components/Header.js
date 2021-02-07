import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { DataShare } from '../DataProvider';
const Nav= styled.ul`
    background-image: linear-gradient(#880000, black);
    dislay: flex;
    color: black;
    font-size: 16px;
    margin: 0;
    .right{
        display: flex;
        float: right;
        font-size: 18px;
        color: white;
        text-decoration:none;
        padding-right: 3em;
        a{
            text-decoration:none;
            &:hover{
                color: #dedede;
              }
        }
        .material-icons{
            padding-top:0.8em;
            margin:1px auto;
            margin-right:5px;
        }
    }
    .Li{
        display: inline-block;
        font-size: 18px;
        padding: 1em;
        padding-left: 3em;
        .tab{
            color: white;
            text-decoration:none;
            &:hover{
                color: #dedede;
              }
        }
        
      }
    
`
const A= styled.a`
    text-decoration:none;
    &:hover{
        color: #dedede;
    }
    
`
export class Header extends React.Component {
    static contextType = DataShare;
    handleClick(){
        this.context.setLogin(false)
    }
    render(){
    return (
        
        <Nav>
            <li class="Li"><a href="/home" class="tab"><b>Home</b></a></li>
            <li class="Li"><a href="/about" class="tab"><b>O nama</b></a></li>
            <li class="Li"><a href="/contact" class="tab"><b>Kontakt</b></a></li>
            <div class="right">
                    <i class="material-icons">person</i>
                    <p>{ this.context.login?
                    <A href="/home" onClick={this.handleClick}><b>Odjavi se</b></A> :
                    <A href="/login"><b>Prijavi se</b></A>
                    }
                    </p>
                    
                    
            </div>  
        </Nav>
    )
    }
    
  }