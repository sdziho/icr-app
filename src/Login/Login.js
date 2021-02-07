import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DataShare } from '../DataProvider';

const Wrap = styled.div`

margin:5rem auto;
width:30rem;
height:30rem;
background-image: linear-gradient(45deg,black, #880000);
border-radius:20px;    
form{
    width:60%;
    margin:auto;
    padding-top:5rem;
    label{
        display:grid;
        grid-template-rows: 1fr;
        grid-gap:1em;
        .fail{
            font-size:10px;
            color:red;
            padding-left: 1em;
        }
        .none{
            font-size:10px;
            visibility: hidden;
        }
        input{
            padding:1em;
            border:none;
            border-radius:5px;
            &:focus{
                outline: none;
            }
        }
        div{
            font-size:30px;
            text-align:center;
            padding-bottom:1em;
            color:white;
            
        }
        .prijava{
            .dugme{
                padding:0.7em;
                background-image: linear-gradient(#880000, #880000);
                color:white;
                border-radius:10px;
                width:60%;
                margin:auto;
                .l{
                    text-decoration:none;
                }
            }
        }
        .ikona{
            display:flex;
            background-color:white;
            border-radius:5px;
            .material-icons{
                border-right:1px solid #5d5d5d;
                padding-top:0.5em;
                padding-left:0.2em;
                padding-right:0.2em;
                color:#5d5d5d;
            }
        }
    }
}

`


export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ime: '',
            sifra:'',
            flag:true
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        this.setState({ime:event.target.value})
    }
    handleChange2(event){
        event.preventDefault();
        this.setState({sifra:event.target.value})
    }
    static contextType = DataShare;
    handleClick=(event)=>{
        if(this.state.ime=='admin'&&this.state.ime=='admin'){
            event.setLogin(true);
            console.log(event.login)
        }
        else if(this.state.ime=='manager'&&this.state.ime=='manager'){
        }
        else if(this.state.ime=='serviser'&&this.state.ime=='serviser'){
        }
        else this.setState({flag:false})
    }
    render(){
        return(
            <Wrap>
                <div>
                    
                </div>
                <form>
                    <label>
                        
                        <div><b>Prijava</b></div>
                        <span className="ikona">
                            <i class="material-icons">person</i>
                            <input type="string" 
                            placeholder="Korisničko ime" 
                            value={this.state.ime} 
                            onChange={this.handleChange}>
                            </input>
                        </span>
                        <span className="ikona">
                            <i className="material-icons">arrow_forward</i>
                            <input placeholder="Šifra" value={this.state.sifra} type="password" onChange={this.handleChange2}></input>
                        </span>
                        {this.state.flag ? <span className="none">Pogresni</span>:<span className="fail">Pogrešni podaci</span>}
                        <div className="prijava">
                            <Button className="dugme" variant="contained" onClick={()=>this.handleClick(this.context)}>
                                <Link className="l"to="#">
                                    Prijavi se
                                </Link>
                            </Button>
                            
                        </div>
                    </label>
                </form>
            </Wrap>
        )
    }
}