import './Style.css';
import user from './Icones/user.png';
import Email from './Icones/Email.png';
import endereço from './Icones/endereço.png'
import idade from './Icones/idade.png';
import celular from './Icones/celular.png';
import logo from './Icones/react.png';
import Resumo from '../Resumo/script';

function casa(props) {

  function local () {
  window.open('https://www.google.com/maps/place/Osasco+-+SP/data=!4m2!3m1!1s0x94ce5583db0fdfef:0x90ee3c33b723aa9c?sa=X&ved=2ahUKEwjNrpud4of1AhWnI7kGHXVtDPAQ8gF6BAgyEAE') 
  }


  return (
    <div className="Casa">
      <h1> Sobre mim</h1>

      <div className="Casa-Center">
        
        <div className="Casa-Left">

          <div className="Name">
            <img  src={user}  />
             <h2>Meu Nome</h2>
             <p>Kevyn Douglas A. Marques</p>
          </div>

          <div className="email">
          <img src={Email} alt="user" />
          <h2>Email</h2>
             <p>kevynmarquesDev@hotmail.com</p>
          </div>

          <div className="end">
          <img src={endereço} alt="user" />
          <h2>Endereço</h2>
             <p id='local' onClick={local}>Clique para ver no mapa.</p>
          </div>
        </div>

        <div className="Casa-Right">

        <div className="idade">
            <img src={idade} alt="user" />
             <h2>Idade</h2>
             <p>23 Anos</p>
      
          </div>

          <div className="celular">
            <img src={celular} alt="user" />
             <h2>Celular</h2>
             <p>55+ (11)94175-3979</p>
          </div>
        </div>
      </div>
      <div className="Casa-Dois"> 
       <div className="description">
       <h1> Perfil </h1>
               <p>Ola, meu nome é Kevyn Douglas A. Marques  sou um desenvolvedor Junior, realizei esse projeto com intuito de demonstar minhas habilidades profissionais, todo o projeto foi criado em Reactjs.</p>
       </div>
       <img src={logo} alt="user" />
      </div>
    </div> 

  )
}

export default casa
