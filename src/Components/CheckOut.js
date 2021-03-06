import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { NameForm } from '../Forms/NameForm';
import { DataShare } from '../DataProvider';

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
        .dugme{
            background-image: linear-gradient(#880000, black);
            color:white
        }
    }

`

export const CheckOut = () => {
    return (
        <Wrap>
            <h1>Uspješna rezervacija!</h1>
            <div className="filtriraj">
                <a href="/home">
              <Button className="dugme"variant="contained" color="primary" >Vrati se na početnu</Button>
              </a>
            </div>
        </Wrap>

        )
  }