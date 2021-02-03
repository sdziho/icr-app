import React, { useEffect, useState } from 'react'
import Axios from "axios"; 
import { Auto } from './Auto';

export const GetVozila =({info})=>{
    const [dostupnostList, setdostupnostList] = useState([]);
    const [vozilaList, setVozilaList] = useState([]);
    useEffect(()=>{
        getVozila();
    },[])
    const getVozila = () => {
        getDostupnost();
        Axios.get("http://localhost:3001/vozila").then((response) => {
            setVozilaList(response.data);
        });
        
    };
    const getDostupnost=()=>{
        Axios.get("http://localhost:3001/dostupnost_auta").then((response) => {
            setdostupnostList(response.data);
        });
    }
    
    return(
        <div>
            {vozilaList.map((val, key) => (
                <Auto carFilter={info} carData={val} datum={dostupnostList}/>
            )).sort(function(a, b){
                //console.log(a.props.carData.cijena)
                if(!a.props.carFilter.ime)
                    return a.props.carData.cijena - b.props.carData.cijena})}
        </div>
    )
}