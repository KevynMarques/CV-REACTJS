import React from "react"; 
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/script';
import Profile from './Components/Profile/Script';
import Casa from "./Components/Info/Casa/Script";
import Resumo from "./Components/Info/Resumo/script";
import Port from './Components/Info/Portifólio/script';
import InfoGeral  from'./Components/Info/InfoGeral/script';
import Loading from './Components/loading/script'



function App() {
  const [info, setInfo]=useState(<Casa />)
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
      setLoading(true);
  }, [info])

  
  setTimeout(() => {
    setLoading(false); 
  }, 1500);

  return (
    <div className="page">
      <Profile />
      <Header  info={info} setInfo ={setInfo}/>
     <InfoGeral  info={info} setInfo ={setInfo} />
     { loading && <Loading />} 
   </div>  
   
  );
}


export default App;
