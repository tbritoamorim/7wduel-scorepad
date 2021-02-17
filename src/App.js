import './App.scss';
import pantheon from './pantheon.jpg';
import agora from './agora.jpg';
import Scorepad from './Scorepad';

function App() {
  return (
    <div className="App">
      <header className="setup-container">
        <div className="game-container">
          <img src={pantheon} className="game-box" alt="panteão"></img>
          <input type="checkbox"></input>
        </div>
        <div className="game-container">
          <img src={agora} className="game-box" alt="ágora"></img>
          <input type="checkbox"></input>
        </div>
      </header>
      <Scorepad />
    </div>
  );
}

export default App;
