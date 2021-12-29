import React from 'react';
import './style.css' 
import react,{useState, useEffect}from 'react'
import Casa from '../Casa/Script';
import Resumo from '../Resumo/script';
import Port from '../Portifólio/script';
import Header from '../../Header/script';



function Info(props) {


  return (
    <div className='info'>{props.info}</div>  
  );
}

export default Info