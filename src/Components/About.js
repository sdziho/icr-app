import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrap= styled.div`
    margin: 2rem auto;
    max-width: 75rem;
    padding: 1em;
    p{
        text-align: left;
        font-weight: bold;
    }
    .rezervisi{
        text-align: center;
        padding: 1em;
    }

`
export const About = () => {
    return (
        <Wrap>
            <p><a href="/home">Rentacar.ba</a> nudi vrhunsku i pouzdanu platformu za iznajmljivanje vozila.Oficijelni partneri smo vodeće svjetske platforme Cartrawler za iznajmljivanje vozila u svijetu.</p>
            <div>Na našim stranicama možete iznajmiti vozila na 43 000 lokacija u 190 država na svijetu.</div>
            <p>Naša vizija : Korisnik je najvažnija osoba u našem poslovanju.</p>
            <div> Korisnik nikad ne prekida naš rad – oni su svrha toga. Korisnik ne ovisi o nama – mi smo ovisni o njima.</div>
            <div className="rezervisi">
                <Button variant="contained" color="primary">Rezerviši odmah</Button>
            </div>
        </Wrap>

        )
  }