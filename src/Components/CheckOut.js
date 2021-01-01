import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { NameForm } from '../Forms/NameForm';

const Wrap= styled.div`
    box-sizing: border-box;
    h1{
        text-align:center;
        font-size:30px;
        margin: 5rem auto;
    }
    .filtriraj{
        text-align:center;
        a{
            text-decoration:none;
            color:white;
        }
    }

`
export const CheckOut = () => {
    return (
        <Wrap>
            <h1>Uspješna rezervacija!</h1>
            <div className="filtriraj">
                <a href="/home">
              <Button variant="contained" color="primary" >Vrati se na početnu</Button>
              </a>
            </div>
        </Wrap>

        )
  }