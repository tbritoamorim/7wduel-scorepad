import './App.scss';
import pantheon from '../_images/pantheon.jpg';
import agoraImage from '../_images/agora.jpg';
import Scorepad from '../_components/Scorepad';
import {React, useState} from 'react';

function App() {
  const [agora, setAgora] = useState(false);

  const handleAgoraToggle = e => {
    setAgora(e.target.checked);
  }

  const [panteao, setPanteao] = useState(false);

  const handlePanteaoToggle = e => {
    setPanteao(e.target.checked);
  }

  return (
    <div className="App">
      <header className="setup-container">
        <div className="game-container">
          <img src={pantheon} className="game-box" alt="panteão"></img>
          <input type="checkbox" onChange={handlePanteaoToggle}></input>
        </div>
        <div className="game-container">
          <img src={agoraImage} className="game-box" alt="ágora"></img>
          <input type="checkbox" onChange={handleAgoraToggle}></input>
        </div>
      </header>
      <Scorepad hasAgora={agora} hasPanteao={panteao}/>
    </div>
  );
}

export default App;
