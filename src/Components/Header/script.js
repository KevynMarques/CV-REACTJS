import React from "react"
import { useState, useEffect } from 'react';
import './Style.css'
import User from './Icons/user.png'
import Email from './Icons/email.png'
import Lampada from './Icons/port.png'
import Resumo from '../Info/Resumo/script'
import Casa from '../Info/Casa/Script' 
import Port from "../Info/Portifólio/script"
import Menu from './Icons/menu.png'
import Home from './Icons/home.png'
import InfoGeral  from '../Info/InfoGeral/script'


function  Headerjs (props) {


  const clickCasa = ()=> {
  props.setInfo(<Casa />,)
  const home = document.querySelector('.Home-container'); 
  home.classList.remove('iconeClick'); 

  const user = document.querySelector('.Resumo-container'); 
  user.classList.add('iconeClick');

  const port = document.querySelector('.Port-container'); 
    port.classList.add('iconeClick');

    const email = document.querySelector('.Email-container'); 
    email.classList.add('iconeClick');
} 

  const clickResumo = ()=> {
    props.setInfo(<Resumo />)
    const user = document.querySelector('.Resumo-container'); 
    user.classList.remove('iconeClick');

    const home = document.querySelector('.Home-container'); 
    home.classList.add('iconeClick'); 

    const port = document.querySelector('.Port-container'); 
    port.classList.add('iconeClick');

    const email = document.querySelector('.Email-container'); 
    email.classList.add('iconeClick');
  }


  const clickPort = ()=> { 
    props.setInfo(<Port /> ) 

    const port = document.querySelector('.Port-container'); 
    port.classList.remove('iconeClick');

    const user = document.querySelector('.Resumo-container'); 
    user.classList.add('iconeClick');

    const home = document.querySelector('.Home-container'); 
    home.classList.add('iconeClick'); 

    const email = document.querySelector('.Email-container'); 
    email.classList.add('iconeClick');

  }

  function clickEmail(){
    window.open("mailto:kevynmarquesDev@hotmail.com")
  
   }

  function clicando( ) {
  const ul = document.getElementById('ulMenu'); 
    if(ul.className.endsWith('Menu-close')) {
      ul.classList.add('Menu-open');
    } else if (ul.className.endsWith('Menu-open')) {
      ul.classList.remove('Menu-open')
    }
  }

  
  useEffect(()=>{
    const ul = document.getElementById('ulMenu'); 
    if(ul.className.endsWith('Menu-open')) {
      ul.classList.remove('Menu-open');
    }
}, [clickPort, clickCasa,clickResumo])


  return (
    
    <div className="Header">
       <ul id="ulMenu" className="Menu-close" >

  <li className='Home'>
     <div className="Home-container">
     <img   src={Home}  onClick={clickCasa}/> 
     <p className='texto um' onClick={clickCasa} >Home</p>
       </div>
  </li>
  <li className='Resumo'>
    <div className="Resumo-container iconeClick">
    <img  src={User} onClick={clickResumo}/>
    <p className='texto Dois' onClick={clickResumo} >Resumo</p>
   </div>
  </li>
  


  <li className='Portifolio'>
    <div className="Port-container iconeClick">
    <img src={Lampada} onClick={clickPort} />
    <p className='texto Tres' onClick={clickPort} >Portifólio</p>
   </div>
  </li>

  <li className='Email'>
   <div className="Email-container iconeClick">
     <img src={Email}  onClick={clickEmail} />
     <p className='texto Quatro' onClick={clickEmail}>Email</p>
   </div>
  </li>
  </ul>



  <div className="Menu"  onClick={clicando}>
     <img src={Menu} />
     <p>Menu</p>
  </div>
   
    </div>
  ); 

}

export default Headerjs