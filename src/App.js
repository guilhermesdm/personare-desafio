import React, { useState } from "react";
import './App.css';
import { cards } from './tarot.json';

const baseUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341"

function App() {
  
  const [cartas, setCartas] = useState(cards)

  const shuffle = (cards) => {
    // funcao embaralhar
    
    for (let i = cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    };
    setCartas(cards);
  }

  return (
    <div className="App">
        <h1> Personare </h1>

          <div className="card">
            {cartas.map(cards => (
              <li key={cards.image}> <img src= {`${baseUrl}/${cards.image}`} alt="card" className="middle"/></li>
              ))}
          </div>

          <button onClick={() => {shuffle(cards)}}> Embaralhar </button>

    </div>
  );
}


export default App;