import './style.css';
import Medalha from './Icones/Medal.png';


function resumo () {

  return (
 
 <div className="Resumo">
  <h1> Educação  e Habilidades </h1>

   <div className='Resumo-Esquerdo'>
  <div className="Resumo__Geral--Item">
    <img src={Medalha} alt='' />
    <p>React JS</p> 
    <p className="instituição">Rocketseat</p>
  </div>

  <div className='Resumo__Geral--Item'>
  <img src={Medalha} alt='' />
  <p>JavaScript</p> 
 <p className="instituição">B7Web</p>
  </div>

  <div className='Resumo__Geral--Item'>
  <img src={Medalha} alt='' />
  <p>HTML E CSS</p> 
 <p className="instituição">B7Web</p>
  </div>  

  <div className='Resumo__Geral--Item'>
  <img src={Medalha} alt='' />
  <p>Informatica Basica</p> 
 <p className="instituição">Senai-SP</p>
  </div>  
  </div>

  <div className='Resumo-Direito'>
  <div className='Resumo__Geral--Item'>
  <img src={Medalha} alt='' />
  <p>Git</p> 
 <p className="instituição">Rocketseat</p>
  </div>  

  <div className='Resumo__Geral--Item'>
  <img src={Medalha} alt='' />
  <p>Nodejs</p> 
 <p className="instituição">B7Web</p>
  </div>  
  <p className='rodapé'>Atualmente estou estudando para me tornar um especialista em Reactjs, sempre buscando melhorar.</p>
  </div>
 </div>
  );

}
export default resumo 