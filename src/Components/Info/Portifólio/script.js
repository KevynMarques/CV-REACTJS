import './style.css'
import Github from './github.png'
import Netlify from './netlify.png'


function Port () {
 
  function oGituhub (){
    window.open("https://github.com/KevynMarques");
   }

   
   function oNetlify(){
    window.open("https://app.netlify.com/teams/kevynmarques/sites");
   }


  return (
 <div className="port">
  <h1> Portifólio</h1>
   <div className='port-github'> 
     <p>Apesar da pouca experiencia profissional, ja fiz inumeros pequenos projetos para desenvolver e aperfeiçoar minhas habilidades como programador, clique no portifólio que deseja ver e sera redirecionado. </p> 
   </div>
   <div className='port-netlify'> 
    <img src={Netlify} onClick={oNetlify} />
    <p className='textos Dois'>Netlify</p>
      </div> 
      <div  className='Github'>
      <img src={Github} onClick={oGituhub}  />
        <p className='textos Um'>Github</p>
      </div>
 </div>
  );

}

export default Port