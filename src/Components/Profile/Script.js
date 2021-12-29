import './Style.css'; 
import Perfil from './icones/perfil.jpg';
import linkedin from './icones/linkedin.png';
import facebook from './icones/facebook.png';
import twitter from './icones/twitter.png';

function Profilejs () {

  function oLinkedin(){
    window.open("https://www.linkedin.com/in/kevyn-albuquerque-780054202/202/");
   }

   function oFacebook(){
    window.open("https://www.facebook.com/kevyn.marques.5/");
   }

   function oTT(){
    window.open("https://twitter.com/Keevyn98");
   }



return (
   <div className="Profile" >
    <div className="foto">
     <img src={Perfil}  />
    </div>
    <div className="icones-Perfil">
      <div className="redes"><img src={linkedin} onClick={oLinkedin} /> </div>
      <div className="redes"><img src={facebook} onClick={oFacebook} /> </div>
      <div className="redes"><img src={twitter}  onClick={oTT} /> </div>
   </div>  
   <div className="text-Profile">
     <p>Front-End Developer</p>     
   </div>
   <p className='exito'>"A persistência é o caminho do êxito - Charles Chaplin"</p>   
  </div>
);
}

export default Profilejs