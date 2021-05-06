import React from 'react';
import './App.css';
import { cards } from './tarot.json';

const baseUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341"

export default App;

function App() {
  return (
    <div className="App">
   
          {cards.map(cards => (
            <li key={cards.image}> <img src= {`${baseUrl}/${cards.image}`} /></li>
            ))}
        
    </div>
  );
}

