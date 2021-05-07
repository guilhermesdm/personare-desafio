import React, { useState } from "react";
import './App.css';
import { cards } from './tarot.json';
import swal from 'sweetalert';


const baseUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341"
const back = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'

function App() {
  
  const [cartas, setCartas] = useState(cards);
  const [viradas, setViradas] = useState(false);

  const shuffle = (array) => { 
     setCartas([...array.sort(() => 0.5 - Math.random())]);
  }

  return (
    <div className="App">
        <h1> Personare </h1>

        <div className="botoes">

          <button onClick={() => shuffle(cartas)}> Embaralhar </button>
          <button onClick={() => setViradas(!viradas)}> Virar </button>
          
        </div>

          <div className="card">
            {cartas.map(card => (
              <li onClick={() => swal({ 
                title: card.name,
                icon: 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/' + card.image,
                text: "lorem borga",
               })} key={ card.image }> <img src= { !viradas ? back : `${ baseUrl }/${ card.image }`} alt="card"/></li>
              ))}
          </div>

    </div>
  );
}


export default App;